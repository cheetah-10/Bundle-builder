import type { CartItem } from "../types/cartItem";
import type { Product } from "../types/Product";
import type { Step } from "../types/step";

const BASE_URL = 'http://localhost:5000/api';

export interface BundleConfigResponse {
  success: boolean;
  data: {
    steps: Step[];
    products: Product[];
    initialCartState: Record<string, CartItem>;
  };
}

export const fetchBundleConfig = async (): Promise<BundleConfigResponse> => {
  const response = await fetch(`${BASE_URL}/bundle-config`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};