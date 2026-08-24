import React from 'react';
import { useBundle } from '../context/BundleContext';
import { useBundleCalculations } from '../hooks/useBundleCalculations';
import { StepAccordion } from './StepAccordion';
import { ProductCard } from './ProductCard';

export const Builder: React.FC = () => {
  const { steps, products, activeStepId, dispatch, isLoading } = useBundle();
  const { getStepSelectedCount } = useBundleCalculations();

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
    <div className="min-w-0 xl:sticky xl:top-5">
      {steps.map((step) => {
        const isOpen = activeStepId === step.id;

        const stepCategory = step.category.toLowerCase().trim();

        const stepProducts = products.filter(
          (product) =>
            product.category.toLowerCase().trim() === stepCategory
        );

        const selectedCount = getStepSelectedCount(step.id);

        const currentStepIndex = steps.findIndex(
          (currentStep) => currentStep.id === step.id
        );

        const nextStep = steps[currentStepIndex + 1];

        return (
          <StepAccordion
            key={step.id}
            step={step}
            isOpen={isOpen}
            selectedCount={selectedCount}
            totalSteps={steps.length}
            onToggle={() =>
              dispatch({
                type: 'TOGGLE_STEP',
                payload: { stepId: step.id },
              })
            }
          >
            <div className="grid grid-cols-1 gap-3.75 md:max-xl:grid-cols-2 xl:grid-cols-2">
              {stepProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {isOpen && nextStep && (
              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: 'OPEN_STEP',
                    payload: {
                      stepId: nextStep.id,
                    },
                  })
                }
                className="mx-auto mt-3.75 block rounded-[7px] border border-[#4E2FD2] bg-transparent px-6 py-1.25 text-[18px] leading-6 font-normal text-[#4E2FD2]"
              >
                Next: {nextStep.title}
              </button>
            )}
          </StepAccordion>
        );
      })}
    </div>
  );
};