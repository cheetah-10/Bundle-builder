import type { CartItem } from "./cartItem";

// Complete system state used by localStorage and application state.
export interface SystemState {
  selectedItems: Record<string, CartItem>; // Selected bundle items
  activeStepId: string;                    // Currently open accordion step
}