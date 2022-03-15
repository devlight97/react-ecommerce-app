import { SIGN_IN } from './user.types';

export const count = (num: number) => ({
  type: 'user/count',
  payload: { counter: num + 1 },
});

export const signIn = () => ({
  type: SIGN_IN,
  payload: { currentUser: null },
});
