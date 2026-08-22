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
    <div className={`step-accordion ${isOpen ? 'step-accordion-open' : ''}`}>
      {/* Accordion Header */}
      <button
        type="button"
        onClick={onToggle}
        className="step-header"
      >
        <div className="step-heading">
          {/* Order Badge */}
          <div>
            <span className="step-kicker">{step.subtitle || `STEP ${step.order} OF ${totalSteps}`}</span>
            <h3 className="step-title">{step.title}</h3>
          </div>
        </div>

        <div className="step-meta">
          {/* Selected Count Indicator */}
          {selectedCount > 0 && (
            <span className="selected-pill">
              {selectedCount} selected
            </span>
          )}

          {/* Chevron Icon */}
          <span className={`step-chevron ${isOpen ? 'step-chevron-open' : ''}`}>
            ▾
          </span>
        </div>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="step-content">
          {children}
        </div>
      )}
    </div>
  );
};