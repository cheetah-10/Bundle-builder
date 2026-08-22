import React from 'react';

interface QuantityStepperProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md';
}

export const QuantityStepper: React.FC<QuantityStepperProps> = React.memo(({
  quantity,
  onIncrement,
  onDecrement,
  min = 0,
  max = 99,
  size = 'md',
}) => {
  const isSmall = size === 'sm';

  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-xs">
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= min}
        className={`${
          isSmall ? 'w-6 h-6 text-xs' : 'w-8 h-8 text-sm'
        } flex items-center justify-center text-slate-700 bg-gray-50 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-gray-50 transition-colors font-semibold select-none`}
        aria-label="تقليل الكمية"
      >
        -
      </button>

      <span
        className={`${
          isSmall ? 'w-7 text-xs' : 'w-9 text-sm'
        } text-center font-bold text-slate-800 select-none`}
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrement}
        disabled={quantity >= max}
        className={`${
          isSmall ? 'w-6 h-6 text-xs' : 'w-8 h-8 text-sm'
        } flex items-center justify-center text-slate-700 bg-gray-50 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-gray-50 transition-colors font-semibold select-none`}
        aria-label="زيادة الكمية"
      >
        +
      </button>
    </div>
  );
});

QuantityStepper.displayName = 'QuantityStepper';