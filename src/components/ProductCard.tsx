import React from 'react';
import { QuantityStepper } from './QuantityStepper';
import { VariantSelector } from './VariantSelector'; 
import { useProductVariantLogic } from '../hooks/useProductVariant';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
  const {
    selectedVariant,
    currentQuantity,
    handleSelectVariant,
    handleIncrement,
    handleDecrement,
  } = useProductVariantLogic(product);

  const displayPrice = selectedVariant?.price ?? product.price;
  const displayCompareAtPrice = selectedVariant?.compareAtPrice ?? product.compareAtPrice;
  const displayImage = selectedVariant?.image ?? product.image;

  return (
    <div className={`product-card ${currentQuantity > 0 ? 'product-card-selected' : ''}`}>
      {/* Upper Portion */}
      <div className="product-main">
        <div className="product-image-wrap">
          {product.discount && (
            <span className="discount-badge">
              Save {product.discount}%
            </span>
          )}
          <img
            src={displayImage}
            alt={product.title}
            className="product-image"
            loading="lazy"
          />
        </div>

        <div className="product-copy">
          <h4 className="product-title">{product.title}</h4>
          <p className="product-description">{product.description}</p>
          <a href={product.learnMoreUrl} className="learn-more">Learn More</a>
        </div>
      </div>

      {/* Middle Portion: Variant Selector Component */}
      {product.variants && (
        <VariantSelector
          variants={product.variants}
          selectedVariant={selectedVariant}
          onSelectVariant={handleSelectVariant}
        />
      )}

      {/* Bottom Portion: Pricing & Stepper */}
      <div className="product-footer">
        <div className="product-prices">
          {displayCompareAtPrice && displayCompareAtPrice > displayPrice && (
            <span className="old-price">${displayCompareAtPrice.toFixed(2)}</span>
          )}
          <span className="current-price">
            ${displayPrice.toFixed(2)}
          </span>
        </div>

        <QuantityStepper
          quantity={currentQuantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';