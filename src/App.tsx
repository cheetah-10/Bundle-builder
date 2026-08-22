import React from 'react';
import { BundleProvider } from './context/BundleContext';

// import { Accordion } from './components/Accordion';
// import { ReviewPanel } from './components/ReviewPanel';

export const App: React.FC = () => {
  return (
    <BundleProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="border-b bg-white py-6 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Build Your Custom Security System
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Select products from each step to build your perfect security package.
            </p>
          </div>
        </header>

        {/* Main Content Layout */}
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Steps / Accordion Section (Left Side) */}
            <section className="lg:col-span-8">
              {/* <Accordion /> */}
              <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-500">
                Accordion Steps Component Will Render Here
              </div>
            </section>

            {/* Review / Cart Summary Panel (Right Side) */}
            <aside className="lg:col-span-4">
              {/* <ReviewPanel /> */}
              <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center text-gray-500">
                Review Panel Component Will Render Here
              </div>
            </aside>
          </div>
        </main>
      </div>
    </BundleProvider>
  );
};

export default App;