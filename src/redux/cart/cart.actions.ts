import {
  ACTIVE_CART,
  ADD_ITEM,
  HIDDEN_CART,
  TOGGLE_CART,
} from './cart.types';

export const activeCart = () => ({
  type: ACTIVE_CART,
  payload: { isActive: true },
});

export const hiddenCart = () => ({
  type: HIDDEN_CART,
  payload: { isActive: false },
});

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addItem = (item: any) => ({
  type: ADD_ITEM,
  payload: item,
});
