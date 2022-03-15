import { IUser } from '../../models/users.model';
import { SIGN_IN } from './user.types';

export const count = (num: number) => ({
  type: 'user/count',
  payload: { counter: num + 1 },
});

export const setCurrentUser = (currentUser: IUser | null) => ({
  type: SIGN_IN,
  payload: { currentUser },
});
