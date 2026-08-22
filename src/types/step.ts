export interface Step {
  id: string;          // e.g., "step-1"
  order: number;       // e.g., 1 (عشان ترتيب الخطوات)
  title: string;       // e.g., "Choose your cameras"
  subtitle: string;    // e.g., "STEP 1 OF 4"
  category: string;    // e.g., "Cameras" (عشان ربط المنتجات بالخطوة وعرض التجميعة في الـ Review Panel)
}