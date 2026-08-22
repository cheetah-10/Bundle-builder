import React from 'react';
import type { Variant } from '../types/variant';

interface VariantSelectorProps {
  variants: Variant[];
  selectedVariant: Variant | null;
  onSelectVariant: (variant: Variant) => void;
}

export const VariantSelector: React.FC<VariantSelectorProps> = React.memo(({
  variants,
  selectedVariant,
  onSelectVariant,
}) => {
  if (!variants || variants.length === 0) return null;

  return (
    <div className="variant-selector">
      <div className="variant-list">
        {variants.map((variant) => {
          const isSelected = selectedVariant?.id === variant.id;
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onSelectVariant(variant)}
              className={`variant-button ${
                isSelected
                  ? 'variant-button-selected'
                  : 'variant-button-unselected'
              }`}
            >
              {variant.name}
            </button>
          );
        })}
      </div>
    </div>
  );
});

VariantSelector.displayName = 'VariantSelector';