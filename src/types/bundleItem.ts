export interface BundleItem {
  productId: string;     // Original product ID (e.g., "cam-outdoor")
  variantId?: string;    // Variant ID when applicable (e.g., "v-red")
  productTitle: string;  // Product title shown in the UI
  variantName?: string;  // Variant name shown in the UI
  price: number;         // Price for one unit of this variant
  image: string;         // Thumbnail shown in the review panel
  category: string;      // Product category used by the review panel
  quantity: number;      // Selected quantity, always greater than zero
}

// The complete bundle selection is a list or map of these products.
export type BundleSelection = Record<string, BundleItem>;
// The key combines product and variant IDs, e.g. "cam-outdoor_v-red".