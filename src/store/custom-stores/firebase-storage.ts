import { StateStorage } from 'zustand/middleware';


const firebaseUrl = 'https://zustand-fire-dev-default-rtdb.firebaseio.com/zustand';

const getData = async ( name: string ) => {
  try {
    const data = await fetch( `${ firebaseUrl }/${ name }.json` ).then( res => res.json() );
    return data;
  } catch ( err ) {
    throw err;
  }
};

const setData = async ( name: string, value: string ) => {
  try {

    await fetch( `${ firebaseUrl }/${ name }.json`, {
      method: 'PUT',
      body: JSON.stringify( value ),
    } ).then( res => res.json())

    // console.log( { resp } );
    return;

  } catch ( error ) {
    throw error;
  }
};



export const firebaseStorage: StateStorage = {

  getItem: async function ( name: string ): Promise<string | null> {
    return await getData( name );
  },
  setItem: function ( name: string, value: string ): Promise<void> {
    return setData(name, value)
  },
  removeItem: function ( name: string ): void | Promise<void> {
    throw new Error( 'Function not implemented.' );
  }
};