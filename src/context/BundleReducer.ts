import initialStateData from '../data/initialState.json';
import type { BundleAction, BundleReducerState } from '../types/bundleReducer';
import type { CartItem } from '../types/cartItem';

export const getItemKey = (productId: string, variantId?: string) => {
  return `${productId}_${variantId || 'default'}`;
};

export const bundleReducer = (
  state: BundleReducerState,
  action: BundleAction
): BundleReducerState => {
  switch (action.type) {
    case 'INCREMENT_QUANTITY': {
      const { product, variant } = action.payload;
      const key = getItemKey(product.id, variant?.id);
      const currentItem = state.cartItems[key];
      const currentQty = currentItem ? currentItem.quantity : 0;
      const newQty = currentQty + 1;

      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [key]: {
            cartItemId: key,
            productId: product.id,
            variantId: variant?.id,
            productTitle: product.title,
            variantName: variant?.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: newQty,
          },
        },
      };
    }

    case 'DECREMENT_QUANTITY': {
      const { product, variant } = action.payload;
      const key = getItemKey(product.id, variant?.id);
      const currentItem = state.cartItems[key];
      
      if (!currentItem) return state;

      const newQty = currentItem.quantity - 1;
      const updatedCartItems = { ...state.cartItems };

      if (newQty <= 0) {
        delete updatedCartItems[key];
      } else {
        updatedCartItems[key] = {
          ...currentItem,
          quantity: newQty,
        };
      }

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case 'SET_QUANTITY': {
      const { product, variant, quantity } = action.payload;
      const key = getItemKey(product.id, variant?.id);
      const updatedCartItems = { ...state.cartItems };

      if (quantity <= 0) {
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
          quantity,
        };
      }

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case 'OPEN_STEP':
      return {
        ...state,
        activeStepId: action.payload.stepId,
      };

    case 'TOGGLE_STEP':
      return {
        ...state,
        activeStepId: state.activeStepId === action.payload.stepId ? '' : action.payload.stepId,
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