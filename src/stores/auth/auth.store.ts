import { StateCreator } from 'zustand';
import type { AuthStatus, User } from '../../interfaces';



export interface AuthState {

  status: AuthStatus;
  token?: string;
  user?:  User;


}


export const storeApi: StateCreator<AuthState> = (set) => ({

  status: 'unauthorized',
  token: undefined,
  user: undefined,
  



})
