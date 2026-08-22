import React from 'react';
import { BundleProvider } from './context/BundleContext';
import { BundleBuilder } from './components/BundleBuilder';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <BundleProvider>
      <main className="min-h-screen bg-slate-50">
        <BundleBuilder />
      </main>
      <Toaster position="bottom-center" />
    </BundleProvider>
  );
};

export default App;