import { AnyAction } from 'redux';

import {
  ACTIVE_CART,
  ADD_ITEM,
  HIDDEN_CART,
  TOGGLE_CART,
} from './cart.types';

interface ICartState {
  isActive: boolean;
  cartItems: any[];
}

const initialState: ICartState = {
  isActive: false,
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTIVE_CART:
      return { ...state, ...payload };
    case HIDDEN_CART:
      return { ...state, ...payload };
    case TOGGLE_CART:
      return { ...state, isActive: !state.isActive };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
