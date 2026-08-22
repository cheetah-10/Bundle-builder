import React from 'react';
import { useBundle } from '../context/BundleContext';
import { useBundleCalculations } from '../hooks/useBundleCalculations';
import { StepAccordion } from './StepAccordion';
import { ProductCard } from './ProductCard';

export const Builder: React.FC = () => {
  const { steps, products, activeStepId, dispatch, isLoading } = useBundle();
  const { getStepItemsCount } = useBundleCalculations(); 

  if (isLoading) {
    return (
      <div className="flex-1 space-y-4">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="h-20 bg-gray-200 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="builder-column">
      {steps.map((step) => {
        const isOpen = activeStepId === step.id;
        const stepProducts = products.filter(
          (p) => p.category.toLowerCase().trim() === step.category.toLowerCase().trim()
        );
        
        // 👈 جلب العدد مباشرة بـ step.id
        const selectedCount = getStepItemsCount(step.id);

        return (
          <StepAccordion
            key={step.id}
            step={step}
            isOpen={isOpen}
            selectedCount={selectedCount}
            totalSteps={steps.length}
            onToggle={() => dispatch({ type: 'TOGGLE_STEP', payload: { stepId: step.id } })}
          >
            <div className="product-grid">
              {stepProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {isOpen && step.order < steps.length && (
              <button
                type="button"
                onClick={() => dispatch({ type: 'OPEN_STEP', payload: { stepId: steps[step.order].id } })}
                className="next-step-button"
              >
                Next: {steps[step.order].title}
              </button>
            )}
          </StepAccordion>
        );
      })}
    </div>
  );
};