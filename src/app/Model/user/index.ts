import { ITimestampSchema } from '../types';

export interface IUserModel extends ITimestampSchema {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  emailVerified?: boolean;
  token?: string;
}
