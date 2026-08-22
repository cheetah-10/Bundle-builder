import React from 'react';
import { Builder } from './Builder';
import { ReviewPanel } from './ReviewPanel';
import { useBundle } from '../context/BundleContext';

export const BundleBuilder: React.FC = () => {
  const { error } = useBundle();

  if (error) {
    return (
      <div className="max-w-4xl mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
        <p className="font-semibold">حدث خطأ أثناء تحميل البيانات:</p>
        <p className="text-sm mt-1">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="bundle-shell">
      <div className="bundle-layout">
        <Builder />
        <ReviewPanel />
      </div>
    </div>
  );
};