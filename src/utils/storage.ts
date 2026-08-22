import type { CartItem } from '../types/cartItem';

const BUNDLE_STORAGE_KEY = 'bundle-builder:bundle';

type StoredBundle = Record<string, CartItem>;

export const saveBundle = (cartItems: StoredBundle): void => {
  localStorage.setItem(BUNDLE_STORAGE_KEY, JSON.stringify(cartItems));
};

export const loadBundle = (): StoredBundle | null => {
  const savedBundle = localStorage.getItem(BUNDLE_STORAGE_KEY);

  if (!savedBundle) return null;

  try {
    return JSON.parse(savedBundle) as StoredBundle;
  } catch {
    localStorage.removeItem(BUNDLE_STORAGE_KEY);
    return null;
  }
};

export const clearBundle = (): void => {
  localStorage.removeItem(BUNDLE_STORAGE_KEY);
};
