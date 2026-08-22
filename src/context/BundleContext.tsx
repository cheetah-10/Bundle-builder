import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { bundleReducer } from './BundleReducer';
import { useBundleConfigQuery } from '../hooks/useBundleQueries';
import type { Step } from '../types/step';
import type { Product } from '../types/Product';
import type { CartItem } from '../types/cartItem';

interface BundleContextType {
  steps: Step[];
  products: Product[];
  cartItems: Record<string, CartItem>;
  activeStepId: string;
  isLoading: boolean;
  error: Error | null;
  dispatch: React.Dispatch<any>;
}

export const BundleContext = createContext<BundleContextType | undefined>(undefined);

export const BundleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, isLoading, error } = useBundleConfigQuery();

  const [state, dispatch] = useReducer(bundleReducer, {
    activeStepId: 'step-1',
    cartItems: {},
  });

  useEffect(() => {
    if (data?.data?.initialCartState) {
      dispatch({
        type: 'LOAD_SAVED_BUNDLE',
        payload: data.data.initialCartState,
      });
    }
  }, [data]);

  return (
    <BundleContext.Provider
      value={{
        steps: data?.data?.steps || [],
        products: data?.data?.products || [],
        cartItems: state.cartItems,
        activeStepId: state.activeStepId,
        isLoading,
        error: error as Error | null,
        dispatch,
      }}
    >
      {children}
    </BundleContext.Provider>
  );
};

export const useBundle = (): BundleContextType => {
  const context = useContext(BundleContext);
  if (!context) {
    throw new Error('useBundle must be used within a BundleProvider');
  }
  return context;
};