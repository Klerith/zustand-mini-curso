import { type StateCreator, create } from 'zustand';
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware';
import { customSessionStorage } from '../storages/session-storage.storage';



interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: ( value: string ) => void;
  setLastName: ( value: string ) => void;
}


const storeAPi: StateCreator<PersonState & Actions> = ( set ) => ( {

  firstName: '',
  lastName: '',

  setFirstName: ( value: string ) => set( state => ( { firstName: value } ) ),
  setLastName: ( value: string ) => set( state => ( { lastName: value } ) ),

} );






export const usePersonStore = create<PersonState & Actions>()(
  persist(
    storeAPi
  , { 
    name: 'person-storage',
    storage: customSessionStorage,
  })

);
