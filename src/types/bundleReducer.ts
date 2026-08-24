import type { CartItem } from "./cartItem";
import type { Product } from "./product";
import type { Variant } from "./variant";

export interface BundleReducerState {
  cartItems: Record<string, CartItem>;
  activeStepId: string;
}

export type BundleAction =
  | { type: 'INCREMENT_QUANTITY'; payload: { product: Product; variant?: Variant } }
  | { type: 'DECREMENT_QUANTITY'; payload: { product: Product; variant?: Variant } }
  | { type: 'SET_QUANTITY'; payload: { product: Product; variant?: Variant; quantity: number } }
  | { type: 'OPEN_STEP'; payload: { stepId: string } }
  | { type: 'TOGGLE_STEP'; payload: { stepId: string } }
  | { type: 'LOAD_SAVED_BUNDLE'; payload: Record<string, CartItem> }
  | { type: 'LOAD_DEFAULT_BUNDLE'; payload: Product[] }
  | { type: 'RESET_BUNDLE' };