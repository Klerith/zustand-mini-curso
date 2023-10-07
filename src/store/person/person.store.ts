import { create } from 'zustand';
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware';


interface PersonState {
  firstName: string;
  lastName: string;
  changeFirstName: ( value: string ) => void;
  changeLastName: ( value: string ) => void;
}

interface Actions {
  changeFirstName: ( value: string ) => void;
  changeLastName: ( value: string ) => void;
}



const customStorage: StateStorage  ={
  getItem: function ( name: string ): string | Promise<string | null> | null {
    console.log({name});
    const data = sessionStorage.getItem(name);
    return data;
  },
  setItem: function ( name: string, value: string ): void | Promise<void> {
    // console.log('setItem', { name, value });
    sessionStorage.setItem(name, value)
  },
  removeItem: function ( name: string ): void | Promise<void> {
    console.log('removeItem', name);
  }
}



export const usePersonStore = create<PersonState & Actions>()(
  persist(
    ( set ) => ( {

      firstName: '',
      lastName: '',


      changeFirstName: ( value: string ) => set( ( state ) => ( { firstName: value } ) ),
      changeLastName: ( value: string ) => set( ( state ) => ( { lastName: value } ) ),

    } ),
    {
      name: 'personStore',
      storage: createJSONStorage( () => customStorage),
    }
  )
);

