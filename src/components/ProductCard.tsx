import React from 'react';
import { QuantityStepper } from './QuantityStepper';
import { VariantSelector } from './VariantSelector';
import { useProductVariantLogic } from '../hooks/useProductVariant';
import type { Product } from '../types/product';
import { getImageUrl } from '../utils/imageUrl';
import { getVariantImageFilter } from '../utils/variantImageFilter';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
  const {
    selectedVariant,
    currentQuantity,
    productQuantity,
    handleSelectVariant,
    handleIncrement,
    handleDecrement,
  } = useProductVariantLogic(product);

  const displayPrice = selectedVariant?.price ?? product.price;
  const displayCompareAtPrice = selectedVariant?.compareAtPrice ?? product.compareAtPrice;
  const displayImage = getImageUrl(selectedVariant?.image ?? product.image);
  const imageFilter = getVariantImageFilter(selectedVariant?.name);

  return (
    <div className={` rounded-lg bg-white p-3 md:min-h-[110px] ${productQuantity > 0 ? 'border-2 border-[#4E2FD2]/70' : 'border-2 border-transparent'}`}>
      <div className="flex relative min-w-0 flex-1 flex-col md:flex-row md:items-center md:gap-2">
        {product.discount && (
          <span className="absolute left-0 top-0 z-10 rounded-[10px] bg-[#4E2FD2] px-1.5 py-0.5 text-[12px] font-normal leading-none text-white">
            Save {product.discount}
          </span>
        )}
        <div className="relative flex h-[136px] w-full shrink-0 items-center justify-center md:h-[78px] md:w-[80px]">

          <img
            src={displayImage}
            alt={product.title}
            className={`h-full w-full object-contain ${imageFilter}`}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = getImageUrl(product.image);
              event.currentTarget.onerror = null;
            }}
          />
        </div>

        <div className="gap-2.5 flex min-w-0 flex-col justify-between md:min-h-[78px]">
          <div>
            <h4 className="text-[16px] tracking-[0.6px] font-normal leading-[100%] text-[#1F1F1F]">{product.title}</h4>
            <p className=" text-[12px] leading-[130%] text-[#1F1F1FBF]/75 ">{product.description}
            </p>
            <a href={product.learnMoreUrl} className="text-[12px] font-normal text-blue-700 underline ">Learn More</a>
          </div>

          {product.variants && (
            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              hasQuantity={currentQuantity > 0}
              onSelectVariant={handleSelectVariant}
            />
          )}

          <div className="flex items-center justify-between">
            <QuantityStepper
              variant="builder"
              quantity={currentQuantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />


            <div className="flex flex-col text-[16px] leading-[100%] items-end gap-0.75">
              {displayCompareAtPrice && displayCompareAtPrice > displayPrice && (
                <span className=" text-[#D8392B] line-through">${displayCompareAtPrice.toFixed(2)}</span>
              )}
              <span className={`text-[#575757]`}>
                ${displayPrice.toFixed(2)}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';