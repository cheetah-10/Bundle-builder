import { useState, useMemo, useCallback } from 'react';
import { useBundle } from '../context/BundleContext';
import type { Product } from '../types/product';
import type { Variant } from '../types/variant';
import { getItemKey } from '../context/BundleReducer';

export const useProductVariantLogic = (product: Product) => {
  const { cartItems, dispatch } = useBundle();

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  // بقت بتستخدم نفس الدالة اللي بيستخدمها الـ reducer، فمفيش احتمال اختلاف الـ format تاني
  const currentQuantity = useMemo(() => {
    const key = getItemKey(product.id, selectedVariant?.id);
    return cartItems[key]?.quantity ?? 0;
  }, [cartItems, product.id, selectedVariant]);

  const productQuantity = useMemo(() => {
    return Object.values(cartItems)
      .filter((item) => item.productId === product.id)
      .reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems, product.id]);

  const handleSelectVariant = useCallback((variant: Variant) => {
    setSelectedVariant(variant);
  }, []);

  const handleIncrement = useCallback(() => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { product, variant: selectedVariant } });
  }, [dispatch, product, selectedVariant]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { product, variant: selectedVariant } });
  }, [dispatch, product, selectedVariant]);

  return {
    selectedVariant,
    currentQuantity,
    productQuantity,
    handleSelectVariant,
    handleIncrement,
    handleDecrement,
  };
};