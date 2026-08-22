import type { CartItem } from "./cartItem";
import type { Product } from "./product";
import type { Step } from "./step";
import type { Variant } from "./variant";

export interface BundleContext {
  steps: Step[];
  products: Product[];
  cartItems: Record<string, CartItem>;
  activeStepId: string;
  setActiveStepId: (stepId: string) => void;
  updateQuantity: (product: Product, variant: Variant | undefined, delta: number) => void;
  getVariantQuantity: (productId: string, variantId?: string) => number;
  getStepSelectedCount: (stepId: string) => number;
  saveSystem: () => void;
  resetSystem: () => void;
}