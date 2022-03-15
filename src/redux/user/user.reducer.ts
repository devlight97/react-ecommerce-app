import { AnyAction } from 'redux';

import { IUser } from '../../models/users.model';
import { SIGN_IN } from './user.types';

interface IUserState {
  currentUser: IUser | null;
  counter: number;
}

const initialState: IUserState = {
  currentUser: null,
  counter: 0,
};

export const userReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case 'user/count':
      return { ...state, ...payload };
    case SIGN_IN:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default userReducer;
