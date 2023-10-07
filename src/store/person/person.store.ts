import { create } from 'zustand';


interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  changeFirstName: (value: string) => void;
  changeLastName: (value: string) => void;
}




export const usePersonStore = create<PersonState & Actions>()( set => ({

  firstName: '',
  lastName: '',


  changeFirstName: (value: string) => set( (state) => ({ firstName: value })),
  changeLastName: (value: string) => set( (state) => ({ lastName: value })),

}))