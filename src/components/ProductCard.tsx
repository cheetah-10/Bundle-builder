import React from 'react';
import { QuantityStepper } from './QuantityStepper';
import { useProductVariantLogic } from '../hooks/useProductVariant';
import type { Product } from '../types/Product';
import type { Variant } from '../types/variant';

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
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
      {/* Upper Portion: Badge, Image, Title & Description */}
      <div className="space-y-3">
        {/* Badge & Image */}
        <div className="relative aspect-video bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
          {product.discount && (
            <span className="absolute top-2 right-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
              خصم {product.discount}%
            </span>
          )}
          <img
            src={displayImage}
            alt={product.title}
            className="w-full h-full object-contain p-2"
            loading="lazy"
          />
        </div>

        {/* Title & Description */}
        <div>
          <h4 className="font-bold text-slate-900 text-base">{product.title}</h4>
          <p className="text-gray-500 text-xs mt-1 line-clamp-2">{product.description}</p>
          <button
            type="button"
            className="text-indigo-600 text-xs font-semibold hover:underline mt-1 inline-block"
          >
            اعرف المزيد
          </button>
        </div>
      </div>

      {/* Middle Portion: Variants Selection (Swatches) */}
      {product.variants && product.variants.length > 0 && (
        <div className="space-y-1.5 pt-2 border-t border-gray-100">
          <span className="text-xs font-medium text-gray-600">الخيارات المتاحة:</span>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant: Variant) => {
              const isSelected = selectedVariant?.id === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => handleSelectVariant(variant)}
                  className={`px-3 py-1 rounded-md text-xs font-medium border transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold'
                      : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {variant.name}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Portion: Pricing & Stepper */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        {/* Pricing */}
        <div className="flex flex-col">
          <span className="text-base font-extrabold text-slate-900">
            ${displayPrice.toFixed(2)}
          </span>
          {displayCompareAtPrice && displayCompareAtPrice > displayPrice && (
            <span className="text-xs text-gray-400 line-through">
              ${displayCompareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stepper Component */}
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