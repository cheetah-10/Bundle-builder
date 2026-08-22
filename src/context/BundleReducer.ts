import initialStateData from '../data/initialState.json';
import type { BundleAction, BundleReducerState } from '../types/bundleReducer';
import type { CartItem } from '../types/cartItem';
import type { Product } from '../types/Product';
import type { Variant } from '../types/variant';

export const getItemKey = (productId: string, variantId?: string) => {
  return `${productId}_${variantId || 'default'}`;
};

const updateItemQuantity = (
  state: BundleReducerState,
  product: Product,
  variant: Variant | undefined,
  getNewQty: (currentQty: number) => number
): BundleReducerState => {
  const key = getItemKey(product.id, variant?.id);
  const currentItem = state.cartItems[key];
  const currentQty = currentItem ? currentItem.quantity : 0;
  const newQty = getNewQty(currentQty);

  const updatedCartItems = { ...state.cartItems };

  if (newQty <= 0) {
    delete updatedCartItems[key];
  } else {
    updatedCartItems[key] = {
      cartItemId: key,
      productId: product.id,
      variantId: variant?.id,
      productTitle: product.title,
      variantName: variant?.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: newQty,
    };
  }

  return {
    ...state,
    cartItems: updatedCartItems,
  };
};

export const bundleReducer = (
  state: BundleReducerState,
  action: BundleAction
): BundleReducerState => {
  switch (action.type) {
    case 'INCREMENT_QUANTITY':
      return updateItemQuantity(
        state,
        action.payload.product,
        action.payload.variant,
        (qty) => qty + 1
      );

    case 'DECREMENT_QUANTITY':
      return updateItemQuantity(
        state,
        action.payload.product,
        action.payload.variant,
        (qty) => qty - 1
      );

    case 'SET_QUANTITY':
      return updateItemQuantity(
        state,
        action.payload.product,
        action.payload.variant,
        () => action.payload.quantity
      );

    case 'OPEN_STEP':
      return {
        ...state,
        activeStepId: action.payload.stepId,
      };

    case 'TOGGLE_STEP':
      return {
        ...state,
        activeStepId:
          state.activeStepId === action.payload.stepId ? '' : action.payload.stepId,
      };

    case 'LOAD_SAVED_BUNDLE':
      return {
        ...state,
        cartItems: action.payload,
      };

    case 'RESET_BUNDLE':
      return {
        ...state,
        cartItems: initialStateData as Record<string, CartItem>,
      };

    default:
      return state;
  }
};