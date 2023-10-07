import { StateStorage } from 'zustand/middleware';



export const customStorage: StateStorage = {
  getItem: function ( name: string ): string | Promise<string | null> | null {
    console.log( { name } );
    const data = sessionStorage.getItem( name );
    return data;
  },
  setItem: function ( name: string, value: string ): void | Promise<void> {
    // console.log('setItem', { name, value });
    sessionStorage.setItem( name, value );
  },
  removeItem: function ( name: string ): void | Promise<void> {
    console.log( 'removeItem', name );
  }
};
