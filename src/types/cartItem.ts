export interface CartItem {
  cartItemId: string;   // `${productId}_${variantId || 'default'}`
  productId: string;
  variantId?: string;
  productTitle: string;
  variantName?: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}