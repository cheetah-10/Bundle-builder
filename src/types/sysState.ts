import type { CartItem } from "./cartItem";

// 5. حالة النظام الكاملة (عشان الـ LocalStorage والـ State)
export interface SystemState {
  selectedItems: Record<string, CartItem>; // قائمة العناصر المختارة
  activeStepId: string;                    // الخطوة المفتوحة حالياً في الـ Accordion
}