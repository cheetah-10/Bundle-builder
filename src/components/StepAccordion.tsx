import React from 'react';
import type { Step } from '../types/step';

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
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all mb-4">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-right"
      >
        <div className="flex items-center gap-4">
          {/* Order Badge */}
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold">
            {step.order}
          </span>

          <div>
            {/* Step Subtitle */}
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider block">
              STEP {step.order} OF {totalSteps}
            </span>
            {/* Step Title */}
            <h3 className="text-base font-bold text-slate-800">{step.title}</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Selected Count Indicator */}
          {selectedCount > 0 && (
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
              {selectedCount} selected
            </span>
          )}

          {/* Chevron Icon */}
          <span className={`transform transition-transform duration-200 text-gray-500 text-sm ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-6 border-t border-gray-100 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};