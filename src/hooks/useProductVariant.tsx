import { useState, useMemo } from 'react';
import { useBundle } from '../context/BundleContext';
import type { Product } from '../types/Product';
import type { Variant } from '../types/variant';

export const useProductVariantLogic = (product: Product) => {
  const { cartItems, getVariantQuantity, incrementQuantity, decrementQuantity } = useBundle();

  const defaultVariant = product.variants && product.variants.length > 0 
    ? product.variants[0] 
    : undefined;

  const [selectedVariant, setSelectedVariant] = useState<Variant | undefined>(defaultVariant);

  const currentQuantity = useMemo(() => {
    return getVariantQuantity(product.id, selectedVariant?.id);
  }, [cartItems, product.id, selectedVariant?.id, getVariantQuantity]);

  const totalProductQuantity = useMemo(() => {
    return Object.values(cartItems)
      .filter((item) => item.productId === product.id)
      .reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems, product.id]);

  const handleIncrement = () => {
    incrementQuantity(product, selectedVariant);
  };

  const handleDecrement = () => {
    decrementQuantity(product, selectedVariant);
  };

  const handleSelectVariant = (variant: Variant) => {
    setSelectedVariant(variant);
  };

  return {
    selectedVariant,
    currentQuantity,
    totalProductQuantity,
    handleSelectVariant,
    handleIncrement,
    handleDecrement,
  };
};