import React from 'react';
import type { Variant } from '../types/variant';
import { getImageUrl } from '../utils/imageUrl';
import { getVariantImageFilter } from '../utils/variantImageFilter';

interface VariantSelectorProps {
  variants: Variant[];
  selectedVariant: Variant | null;
  hasQuantity: boolean;
  onSelectVariant: (variant: Variant) => void;
}

export const VariantSelector: React.FC<VariantSelectorProps> = React.memo(({
  variants,
  selectedVariant,
  hasQuantity,
  onSelectVariant,
}) => {
  if (!variants || variants.length === 0) return null;

  return (
    <div className="mt-0.5">
      <div className="flex flex-wrap gap-1.5 ">
        {variants.map((variant) => {
          const isSelected = hasQuantity && selectedVariant?.id === variant.id;
          const imageFilter = getVariantImageFilter(variant.name);
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onSelectVariant(variant)}
              className={`inline-flex tracking-[.6px]  leading-[100%] items-center rounded-xs border-[.5px] px-0.75 py-px text-[10px] text-[#1F1F1F] outline-none focus-visible:border-[#0AA288]   ${
                isSelected
                  ? 'border-[#0AA288] bg-[#1DF0BB0A]'
                  : 'border-[#CCCCCC] bg-white'
              }`}
            >
              <span
                className="flex h-6 w-7 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-transparent md:max-lg:h-5 md:max-lg:w-6"
              >
                <img
                  src={getImageUrl(variant.image)}
                  alt={`${variant.name} ${variant.id}`}
                  className={`h-full w-full object-contain ${imageFilter}`}
                  loading="lazy"
                />
              </span>
              {variant.name}
            </button>
          );
        })}
      </div>
    </div>
  );
});

VariantSelector.displayName = 'VariantSelector';