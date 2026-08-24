//bundleApi.ts
import type { Product } from "../types/product";
import type { Step } from "../types/step";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export interface BundleConfigResponse {
  success: boolean;
  data: {
    steps: Step[];
    products: Product[];
  };
}

export const fetchBundleConfig = async (): Promise<BundleConfigResponse> => {
  const response = await fetch(`${BASE_URL}/bundle-config`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};