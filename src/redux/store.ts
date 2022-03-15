import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './cart/cart.reducer';
import { userReducer } from './user/user.reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
