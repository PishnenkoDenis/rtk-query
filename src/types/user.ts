import { IPosts } from "../store/user/user.actions";

export interface IUser {
  isLoading: boolean;
  user: IPosts;
  error: string;
}
