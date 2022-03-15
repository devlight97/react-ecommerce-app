import { ACTIVE_CART, HIDDEN_CART, TOGGLE_CART } from './cart.types';

export const activeCart = () => ({
  type: ACTIVE_CART,
  payload: { isActive: true },
});

export const hiddenCart = () => ({
  type: HIDDEN_CART,
  payload: { isActive: false },
});

export const toggleCart = (isActive: boolean) => ({
  type: TOGGLE_CART,
  payload: { isActive },
});
