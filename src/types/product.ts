import type { Variant } from "./variant";

// types/product.ts
export interface Product {
  id: string;
  stepId: string;
  title: string;
  description?: string;
  learnMoreUrl?: string;
  price: number;
  compareAtPrice?: number;
  discount?: string;
  image: string;
  category: string;
  variants?: Variant[];
  defaultQuantity?: number; // ← جديد: الكمية الافتراضية عند أول تحميل (0 أو undefined = مش مختار)
}