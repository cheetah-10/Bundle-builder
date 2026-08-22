import React from 'react';
import { useBundleCalculations } from '../hooks/useBundleCalculations';

export const ReviewPanel: React.FC = () => {
  const { subtotal, totalDiscount, finalTotal, totalItemsCount } = useBundleCalculations();

  return (
    <div className="w-full lg:w-96 bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit sticky top-6 space-y-6">
      <h2 className="text-xl font-bold text-slate-900 border-b pb-4">ملخص الباقة</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>عدد العناصر المختارة:</span>
          <span className="font-semibold text-slate-800">{totalItemsCount}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>المجموع الفرعي:</span>
          <span className="font-semibold text-slate-800">${subtotal.toFixed(2)}</span>
        </div>
        {totalDiscount > 0 && (
          <div className="flex justify-between text-emerald-600 font-medium">
            <span>الخصم المطبق:</span>
            <span>-${totalDiscount.toFixed(2)}</span>
          </div>
        )}
        <div className="border-t pt-3 flex justify-between text-base font-bold text-slate-900">
          <span>الإجمالي النهائي:</span>
          <span className="text-indigo-600">${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      <button
        disabled={totalItemsCount === 0}
        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-sm"
      >
        متابعة للشراء
      </button>
    </div>
  );
};