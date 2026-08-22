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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-8 text-center md:text-right">
        <h1 className="text-3xl font-extrabold text-slate-900">مصمم الباقات المخصص</h1>
        <p className="text-gray-500 mt-2">قم باختيار المنتجات المناسبة لبناء باقتك الخاصة بسهولة</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <Builder />
        <ReviewPanel />
      </div>
    </div>
  );
};