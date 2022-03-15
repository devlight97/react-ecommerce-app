import { AnyAction } from 'redux';

import { ACTIVE_CART, HIDDEN_CART, TOGGLE_CART } from './cart.types';

interface ICartState {
  isActive: boolean;
}

const initialState: ICartState = { isActive: false };

export const cartReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTIVE_CART:
      return { ...state, ...payload };
    case HIDDEN_CART:
      return { ...state, ...payload };
    case TOGGLE_CART:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default cartReducer;
