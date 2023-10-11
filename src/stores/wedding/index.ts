import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { GuestSlice, createGuestSlice } from './guest.slice';
import { PersonSlice, createPersonSlice } from './person.slice';
import { DateSlice, createDateSlice } from './date.slice';
import { ConfirmationSlice, createConfirmationSlice } from './confirmation.slice';



// Crear el store
type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice;

export const useWeddingBoundStore = create<ShareState>()(
  // persist(
  devtools(
    ( ...a ) => ( {
      ...createPersonSlice( ...a ),
      ...createGuestSlice( ...a ),
      ...createDateSlice( ...a ),
      ...createConfirmationSlice(...a),
    } )
    // ), { name: 'wedding-store' }
  )
);