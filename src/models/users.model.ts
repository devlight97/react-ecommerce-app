import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
  Timestamp,
  where,
} from 'firebase/firestore';

import { getCollection } from '../firebase/firestore.factory';

export interface IUser {
  displayName: string;
  email: string;
  createAt?: Timestamp;
  id?: string;
  authUid?: string;
}

export class UserModel implements IUser {
  public static create = async (
    { email, displayName, authUid }: IUser
  ): Promise<IUser | undefined> => {
    const userCollection = getCollection('users');
    const createAt = Timestamp.fromDate(new Date());
    try {
      const uid = await addDoc(
        userCollection,
        { email, displayName, authUid, createAt }
      ).then(result => result.id);
      if (!uid) throw new Error('Can not create a new user');
      const userData = await UserModel.findById(uid);
      if (userData) return new UserModel(userData);
    } catch (error) {
      // console.log(error);
      alert('Can\'t not create a new user');
    }
  }

  public static findById = async (id: string): Promise<IUser | undefined> => {
    const userCollection = getCollection('users');
    const snap = await getDoc(doc(userCollection, id));
    if (snap.exists()) return snap.data() as IUser;
  }

  public static findByAuthUid = async (id: string = ''): Promise<IUser | undefined> => {
    const userCollection = getCollection('users');
    const userQuery = query(userCollection, where('authUid', '==', id));
    const userSnapShot = await getDocs(userQuery).then(snapShot => snapShot.docs[0]);
    if (userSnapShot) {
      const user = await userSnapShot.data();
      return new UserModel(user);
    }
  }

  public static find = (condition: any): Promise<IUser[]> => {
    return Promise.resolve([]);
  }

  public displayName: string;
  public email: string;
  public createAt: Timestamp;
  public id?: string;
  public authUid?: string;
  private userCollection: any = getCollection('users');

  constructor(user: any) {
    this.id = user.id;
    this.displayName = user.displayName;
    this.email = user.email;
    this.createAt = user.createAt;
    this.authUid = user.authUid;
  }

  public save(): Promise<IUser | undefined> {
    return UserModel.create(this);
  }
}
