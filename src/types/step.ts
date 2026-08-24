export interface Step {
  id: string;          // e.g., "step-1"
  order: number;       // e.g., 1, used to order the steps
  title: string;       // e.g., "Choose your cameras"
  subtitle: string;    // e.g., "STEP 1 OF 4"
  category: string;    // Category used to map products to this step
}