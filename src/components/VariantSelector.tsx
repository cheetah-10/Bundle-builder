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
    <div className="space-y-1.5 pt-2 border-t border-gray-100">
      <span className="text-xs font-medium text-gray-600">الخيارات المتاحة:</span>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const isSelected = selectedVariant?.id === variant.id;
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => onSelectVariant(variant)}
              className={`px-3 py-1 rounded-md text-xs font-medium border transition-all ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold shadow-xs'
                  : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
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