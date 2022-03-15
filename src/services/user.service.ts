import {
  createUserWithEmailAndPassword
} from 'firebase/auth';

import { auth } from '../firebase/firebase.utils';

import { IUser, UserModel } from '../models/users.model';

export class UserService {
  public static signIn = async (userAuth: IUser) => {
    const { email, displayName, authUid } = userAuth;
    const userExist = await UserModel.findByAuthUid(authUid);

    if (!userExist) {
      const userData: IUser | undefined = await UserModel.create({
        displayName,
        email,
        authUid,
      });
      return userData;
    }
    return userExist;
  }

  public static signUp = async (
    { email, password, displayName }: any
  ): Promise<IUser | undefined> => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userData = await UserModel.create({
      displayName,
      email: user.email,
      authUid: user.uid,
    } as IUser);

    return userData;
  }
}

export default UserService;
