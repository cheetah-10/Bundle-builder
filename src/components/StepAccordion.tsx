import React from 'react';
import type { Step } from '../types/step';
import { AccessoryIcon, CameraIcon, CloseIcon, SecurityShieldIcon, SensorIcon } from '../assets/DesignIcons';

interface StepAccordionProps {
  step: Step;
  isOpen: boolean;
  selectedCount: number;
  totalSteps: number;
  onToggle: () => void;
  children: React.ReactNode;
}

export const StepAccordion: React.FC<StepAccordionProps> = ({
  step,
  isOpen,
  selectedCount,
  totalSteps,
  onToggle,
  children,
}) => {
  const StepIcon = step.category === 'cameras'
    ? CameraIcon
    : step.category === 'plan'
      ? SecurityShieldIcon
      : step.category === 'sensors'
        ? SensorIcon
        : AccessoryIcon;

  return (
    <div className={`mb-2 relative border-b border-[#1F1F1F] ${isOpen ? 'rounded-md border-0 border-b-0 bg-[#edf4ff] px-3.75 pb-3.5 pt-5' : ''}`}>
      <div className="">
        <div className="border-b absolute right-0 left-0 px-3.75  border-[#484848] block text-[12px] font-normal tracking-[1.6px] text-[#484848]">{step.subtitle || `STEP ${step.order} OF ${totalSteps}`}</div>
      </div>

      <div className="flex min-h-[69px] w-full items-center justify-between bg-transparent py-3 text-left">

        <div className="flex justify-content-center gap-2 pt-5">
          <StepIcon className="h-6 w-6 shrink-0" />
          <div>
            <h3 className="mt-1 text-base font-extrabold text-[#202633]">{step.title}</h3>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggle}
          className=""
        >
          <div className="flex items-center gap-1  text-[#4E2FD2]">
            {isOpen && selectedCount > 0 && (
              <span className="text-[14px] font-normal tracking-normal">
                {selectedCount} selected
              </span>
            )}

            <span className={`text-base font-[Gilroy-Medium] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true"><CloseIcon /></span>
          </div>
        </button>


      </div>


      {isOpen && (
        <div className=''>
          {children}
        </div>
      )}
    </div>
  );
};