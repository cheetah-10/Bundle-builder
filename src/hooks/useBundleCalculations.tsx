//useBundleCalculations.tsx
import { useMemo } from 'react';
import { useBundle } from '../context/BundleContext';
import type { CartItem } from '../types/cartItem';

export const FAST_SHIPPING_PRICE = 5.99;

export interface BundleCalculations {
  selectedItems: CartItem[];
  totalItemsCount: number;
  distinctProductsCount: number;
  subtotal: number;
  originalTotal: number;
  totalDiscount: number;
  finalTotal: number;
  totalWithShipping: number;
  fastShippingPrice: number;
  getStepSelectedCount: (stepId: string) => number;
  getStepItemsCount: (stepId: string) => number;
}

export const useBundleCalculations = (): BundleCalculations => {
  const { cartItems, products } = useBundle();

  const selectedItems = useMemo(() => {
    return Object.values(cartItems).filter((item) => item.quantity > 0);
  }, [cartItems]);

  const totalItemsCount = useMemo(() => {
    return selectedItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [selectedItems]);

  const distinctProductsCount = useMemo(() => {
    const uniqueProductIds = new Set(selectedItems.map((item) => item.productId));
    return uniqueProductIds.size;
  }, [selectedItems]);

  const { subtotal, originalTotal } = useMemo(() => {
    return selectedItems.reduce(
      (acc, item) => {
        const itemPrice = item.price || 0;
        
        const originalProduct = products.find((p) => p.id === item.productId);
        const itemOriginalPrice = originalProduct?.compareAtPrice || itemPrice;

        acc.subtotal += itemPrice * item.quantity;
        acc.originalTotal += itemOriginalPrice * item.quantity;

        return acc;
      },
      { subtotal: 0, originalTotal: 0 }
    );
  }, [selectedItems, products]);

  const totalDiscount = useMemo(() => {
    const discount = originalTotal - subtotal;
    return discount > 0 ? discount : 0;
  }, [originalTotal, subtotal]);

  const finalTotal = subtotal;

  const getStepSelectedCount = (stepId: string): number => {
    const stepProducts = products.filter((p) => p.stepId === stepId);
    const stepProductIds = new Set(stepProducts.map((p) => p.id));

    const selectedProductsInStep = new Set<string>();
    selectedItems.forEach((item) => {
      if (stepProductIds.has(item.productId)) {
        selectedProductsInStep.add(item.productId);
      }
    });

    return selectedProductsInStep.size;
  };

  const getStepItemsCount = (stepId: string): number => {
    const stepProducts = products.filter((p) => p.stepId === stepId);
    const stepProductIds = new Set(stepProducts.map((p) => p.id));

    return selectedItems
      .filter((item) => stepProductIds.has(item.productId))
      .reduce((sum, item) => sum + item.quantity, 0);
  };

  return {
    selectedItems,
    totalItemsCount,
    distinctProductsCount,
    subtotal,
    originalTotal,
    totalDiscount,
    finalTotal,
    totalWithShipping: finalTotal,
    fastShippingPrice: FAST_SHIPPING_PRICE,
    getStepSelectedCount,
    getStepItemsCount,
  };
};