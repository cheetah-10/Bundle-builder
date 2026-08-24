//BundleContext.tsx
import React, { createContext, useContext, useReducer, useEffect, useRef } from 'react';
import { bundleReducer } from './BundleReducer';
import { useBundleConfigQuery } from '../hooks/useBundleQueries';
import type { Step } from '../types/step';
import type { Product } from '../types/product';
import type { CartItem } from '../types/cartItem';
import { loadBundle, saveBundle } from '../utils/storage';

interface BundleContextType {
  steps: Step[];
  products: Product[];
  cartItems: Record<string, CartItem>;
  activeStepId: string;
  isLoading: boolean;
  error: Error | null;
  dispatch: React.Dispatch<any>;
  saveCurrentBundle: () => void;
}

export const BundleContext = createContext<BundleContextType | undefined>(undefined);

export const BundleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, isLoading, error } = useBundleConfigQuery();
  const hasInitialisedBundle = useRef(loadBundle() !== null);

  const [state, dispatch] = useReducer(
    bundleReducer,
    undefined,
    () => ({
      activeStepId: 'step-1',
      cartItems: loadBundle() ?? {},
    })
  );

  useEffect(() => {
    if (!hasInitialisedBundle.current && data?.data?.products) {
      dispatch({ type: 'LOAD_DEFAULT_BUNDLE', payload: data.data.products });
      hasInitialisedBundle.current = true;
    }
  }, [data]);

  const saveCurrentBundle = () => saveBundle(state.cartItems);

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
        saveCurrentBundle,
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