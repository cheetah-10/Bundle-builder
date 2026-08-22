import { useState, useMemo, useCallback } from 'react';
import { useBundle } from '../context/BundleContext';
import type { Variant } from '../types/variant';
import type { Product } from '../types/Product';

export const useProductVariantLogic = (product: Product) => {
  const { cartItems, dispatch } = useBundle();

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  const currentQuantity = useMemo(() => {
    const variantId = selectedVariant?.id;

    const itemKey = variantId ? `${product.id}-${variantId}` : product.id;
    
    return cartItems[itemKey]?.quantity || 0;
  }, [cartItems, product.id, selectedVariant]);

  const handleSelectVariant = useCallback((variant: Variant) => {
    setSelectedVariant(variant);
  }, []);

  const handleIncrement = useCallback(() => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        product,
        variant: selectedVariant,
        quantity: 1,
      },
    });
  }, [dispatch, product, selectedVariant]);

  const handleDecrement = useCallback(() => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: {
        productId: product.id,
        variantId: selectedVariant?.id,
      },
    });
  }, [dispatch, product.id, selectedVariant]);

  return {
    selectedVariant,
    currentQuantity,
    handleSelectVariant,
    handleIncrement,
    handleDecrement,
  };
};