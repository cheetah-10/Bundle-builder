import React from 'react';

interface QuantityStepperProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
}

export const QuantityStepper: React.FC<QuantityStepperProps> = React.memo(({
  quantity,
  onIncrement,
  onDecrement,
  min = 0,
  max = 99,
}) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= min}
        className="w-8 h-8 flex items-center justify-center text-slate-700 bg-gray-50 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-gray-50 transition-colors font-semibold"
        aria-label="تقليل الكمية"
      >
        -
      </button>

      <span className="w-10 text-center font-bold text-sm text-slate-800">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrement}
        disabled={quantity >= max}
        className="w-8 h-8 flex items-center justify-center text-slate-700 bg-gray-50 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-gray-50 transition-colors font-semibold"
        aria-label="زيادة الكمية"
      >
        +
      </button>
    </div>
  );
});

QuantityStepper.displayName = 'QuantityStepper';