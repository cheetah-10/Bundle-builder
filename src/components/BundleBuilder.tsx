
import React from 'react';
import { Builder } from './Builder';
import { ReviewPanel } from './ReviewPanel';
import { useBundle } from '../context/BundleContext';

export const BundleBuilder: React.FC = () => {
  const { error } = useBundle();

  if (error) {
    return (
      <div className="max-w-4xl mx-auto my-12 p-6 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
        <p className="font-semibold">error fetching data</p>
        <p className="text-sm mt-1">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative md:mx-10 md:top-[49.39px] lg:mx-20 xl:mx-30.5 bg-[#f7f7f8] px-2 py-4 md:px-[7.5%] lg:px-6 lg:py-4">
      <div className="mx-auto grid items-start gap-5 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_284px]">
        <Builder />
        <ReviewPanel />
      </div>
    </div>
  );
};

