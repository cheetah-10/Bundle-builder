//QunatityStepper.tsx
import React from 'react';
import { MinusIcon, PlusIcon } from '../assets/DesignIcons';

interface QuantityStepperProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md';
  variant?: 'builder' | 'panel';
  className?: string;
}

export const QuantityStepper: React.FC<QuantityStepperProps> = React.memo(({
  quantity,
  onIncrement,
  onDecrement,
  min = 0,
  max = 99,
  size = 'md',
  variant = 'builder',
  className = '',
}) => {
  const isSmall = variant === 'builder' || variant === 'panel' || size === 'sm';
  const isDecrementDisabled = quantity <= min;
  const isEmpty = quantity === 0;

  const smallButtonClasses =
    variant === 'panel'
      ? 'bg-white border-0'
      : `border ${isEmpty ? 'bg-white border-[#E6EBF0]' : 'bg-[#F1F4F7] border-transparent'}`;

  return (
    <div className={`inline-flex items-center ${isSmall ? 'gap-1 py-0' : 'gap-2 py-1'} ${className}`}>
      <button
        type="button"
        onClick={onDecrement}
        disabled={isDecrementDisabled}
        className={`flex items-center justify-center text-[#575757] disabled:text-[#c3c8d0] ${isSmall
          ? `h-[18px] w-[18px] rounded-[3px] ${smallButtonClasses}`
          : `h-10 w-10 rounded-[10px] ${isDecrementDisabled ? 'border-2 border-[#E6EBF0] bg-white' : 'border-0 bg-[#F1F4F7]'}`}`}
        aria-label="Decrease quantity"
      >
        <MinusIcon className="h-1.5 w-1.5" fill="#575757" />
      </button>

      <span
        className={`text-center font-[Gilroy-Medium] text-[#151515] ${isSmall ? 'w-[17px] text-[9px] leading-[18px]' : 'w-8 text-[28px] leading-10'}`}
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrement}
        disabled={quantity >= max}
        className={`flex items-center justify-center text-[#575757] ${isSmall ? `h-[18px] w-[18px] rounded-[3px] ${smallButtonClasses}` : 'h-10 w-10 rounded-[10px] border-0 bg-[#F1F4F7]'}`}
        aria-label="Increase quantity"
      >
        <PlusIcon className="h-2 w-2" fill="#575757" />
      </button>
    </div>
  );
});

QuantityStepper.displayName = 'QuantityStepper';