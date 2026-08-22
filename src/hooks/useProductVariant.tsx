import { useState, useMemo, useCallback } from 'react';
import { useBundle } from '../context/BundleContext';
import type { Product } from '../types/product';
import type { Variant } from '../types/variant';

export const useProductVariantLogic = (product: Product) => {
  const { cartItems, dispatch } = useBundle();

  // اختيار أول Variant افتراضياً لو للمنتج variants
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  // البحث المرن عن كمية المنتج من الـ cartItems
  const currentQuantity = useMemo(() => {
    // 1. تجربة البحث بالمفتاح المركب (productId-variantId)
    if (selectedVariant?.id) {
      const variantKey = `${product.id}-${selectedVariant.id}`;
      if (cartItems[variantKey]) return cartItems[variantKey].quantity;
    }

    // 2. تجربة البحث بمفتاح المنتج المباشر (productId)
    if (cartItems[product.id]) {
      return cartItems[product.id].quantity;
    }

    // 3. البحث في عناصر السلة عن أي عنصر يطابق الـ productId والـ variantId
    const foundItem = Object.values(cartItems).find(
      (item) =>
        item.productId === product.id &&
        (!selectedVariant || item.variantId === selectedVariant.id)
    );

    return foundItem ? foundItem.quantity : 0;
  }, [cartItems, product.id, selectedVariant]);

  const handleSelectVariant = useCallback((variant: Variant) => {
    setSelectedVariant(variant);
  }, []);

  const handleIncrement = useCallback(() => {
    dispatch({
      type: 'INCREMENT_QUANTITY',
      payload: {
        product,
        variant: selectedVariant,
      },
    });
  }, [dispatch, product, selectedVariant]);

  const handleDecrement = useCallback(() => {
    dispatch({
      type: 'DECREMENT_QUANTITY',
      payload: {
        product,
        variant: selectedVariant,
      },
    });
  }, [dispatch, product, selectedVariant]);

  return {
    selectedVariant,
    currentQuantity,
    handleSelectVariant,
    handleIncrement,
    handleDecrement,
  };
};