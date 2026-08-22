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
    <div className={`quantity-stepper ${isSmall ? 'quantity-stepper-small' : ''}`}>
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= min}
        className="quantity-button"
        aria-label="تقليل الكمية"
      >
        -
      </button>

      <span
        className="quantity-value"
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrement}
        disabled={quantity >= max}
        className="quantity-button"
        aria-label="زيادة الكمية"
      >
        +
      </button>
    </div>
  );
});

QuantityStepper.displayName = 'QuantityStepper';