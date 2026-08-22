import React from 'react';
import { BundleProvider } from './context/BundleContext';
import { BundleBuilder } from './components/BundleBuilder';

const App: React.FC = () => {
  return (
    <BundleProvider>
      <main className="min-h-screen bg-slate-50">
        <BundleBuilder />
      </main>
    </BundleProvider>
  );
};

export default App;