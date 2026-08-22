export interface BundleItem {
  productId: string;     // id المنتج الأصلي (e.g., "cam-outdoor")
  variantId?: string;    // id اللون لو موجود (e.g., "v-red")
  productTitle: string;  // اسم المنتج للعرض (e.g., "Outdoor Camera")
  variantName?: string;  // اسم اللون للعرض (e.g., "Red")
  price: number;         // سعر قطعة واحدة من هذا الـ variant
  image: string;         // صورة الـ Thumbnail الخاصة بالعنصر في الـ Review Panel
  category: string;      // الفئة (Cameras, Sensors, Plan...) عشان التجميعة في الـ Review Panel
  quantity: number;      // الكمية المختارة (لازم تكون أكتر من 0)
}

// الـ Bundle Selection الكامل بيكون عبارة عن قائمة أو Map بالمنتجات دي:
export type BundleSelection = Record<string, BundleItem>;
// المفتاح (Key) بيكون تركيب فريد بين المنتج واللون، مثل: "cam-outdoor_v-red"