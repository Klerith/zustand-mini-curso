import { create } from 'zustand';
import { User } from '../../interfaces';

type AuthStatus = 'authorized' | 'unauthorized' | 'pending';


export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  loginUser: (token: string, user: User) => void;
  logoutUser: () => void;
}


export const authStore = create()( (set,get) => ({
  status: 'pending',
  token: undefined,
  user: undefined,

  loginUser: (token: string, user: User) => {
    set({ status: 'authorized', token, user });
  },
  
  logoutUser: () => {
    set({ status: 'unauthorized', token: undefined, user: undefined });
  }

}));