import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import productsData from '../data/products.json';
import stepsData from '../data/steps.json';
import initialStateData from '../data/initialState.json';
import type { BundleReducerState } from '../types/bundleReducer';
import type { CartItem } from '../types/cartItem';
import type { Step } from '../types/step';
import type { Product } from '../types/Product';
import type { Variant } from '../types/variant';
import { bundleReducer, getItemKey } from './BundleReducer';

const STORAGE_KEY = 'security_system_bundle';

// 1. Initial State
const getInitialState = (): BundleReducerState => {
  const saved = localStorage.getItem(STORAGE_KEY);
  let cartItems = initialStateData as Record<string, CartItem>;
  if (saved) {
    try {
      cartItems = JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved bundle', e);
    }
  }
  return {
    cartItems,
    activeStepId: 'step-1',
  };
};

interface BundleContextType {
  steps: Step[];
  products: Product[];
  cartItems: Record<string, CartItem>;
  activeStepId: string;
  setActiveStepId: (stepId: string) => void;
  toggleStep: (stepId: string) => void;
  incrementQuantity: (product: Product, variant?: Variant) => void;
  decrementQuantity: (product: Product, variant?: Variant) => void;
  getVariantQuantity: (productId: string, variantId?: string) => number;
  getStepSelectedCount: (stepId: string) => number;
  saveSystem: () => void;
  resetSystem: () => void;
}

const BundleContext = createContext<BundleContextType | undefined>(undefined);

export const BundleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(bundleReducer, undefined, getInitialState);

  const steps = stepsData as Step[];
  const products = productsData as Product[];

  // Handlers / Action Dispatchers
  const incrementQuantity = (product: Product, variant?: Variant) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { product, variant } });
  };

  const decrementQuantity = (product: Product, variant?: Variant) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { product, variant } });
  };

  const setActiveStepId = (stepId: string) => {
    dispatch({ type: 'OPEN_STEP', payload: { stepId } });
  };

  const toggleStep = (stepId: string) => {
    dispatch({ type: 'TOGGLE_STEP', payload: { stepId } });
  };

  const getVariantQuantity = (productId: string, variantId?: string): number => {
    const key = getItemKey(productId, variantId);
    return state.cartItems[key]?.quantity || 0;
  };

  const getStepSelectedCount = (stepId: string): number => {
    const stepProducts = products.filter((p) => p.stepId === stepId);
    const stepProductIds = new Set(stepProducts.map((p) => p.id));

    const selectedProductsInStep = new Set<string>();
    Object.values(state.cartItems).forEach((item) => {
      if (stepProductIds.has(item.productId) && item.quantity > 0) {
        selectedProductsInStep.add(item.productId);
      }
    });

    return selectedProductsInStep.size;
  };

  const saveSystem = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cartItems));
  };

  const resetSystem = () => {
    localStorage.removeItem(STORAGE_KEY);
    dispatch({ type: 'RESET_BUNDLE' });
  };

  return (
    <BundleContext.Provider
      value={{
        steps,
        products,
        cartItems: state.cartItems,
        activeStepId: state.activeStepId,
        setActiveStepId,
        toggleStep,
        incrementQuantity,
        decrementQuantity,
        getVariantQuantity,
        getStepSelectedCount,
        saveSystem,
        resetSystem,
      }}
    >
      {children}
    </BundleContext.Provider>
  );
};

export const useBundle = () => {
  const context = useContext(BundleContext);
  if (!context) {
    throw new Error('useBundle must be used within a BundleProvider');
  }
  return context;
};