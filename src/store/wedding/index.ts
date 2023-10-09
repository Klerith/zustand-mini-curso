import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { PersonSlice, createPersonSlice } from './person.slice';
import { GuestSlice, createGuestSlice } from './guest.slice';
import { DateSlice, createDateSlice } from './date.slice';
import { ConfirmationSlice, createConfirmationSlice } from './confirmation.slice';


type ShareState = PersonSlice & GuestSlice & DateSlice & ConfirmationSlice;



export const useWeddingBoundStore = create<ShareState>()(
// export const useWeddingBoundStore = create<PersonSlice & GuestSlice & DateSlice & ConfirmationSlice >()(
  devtools(

    // persist(
      (...a) => ({
        ...createPersonSlice(...a),
        ...createGuestSlice(...a),
        ...createDateSlice(...a),
        ...createConfirmationSlice(...a),
      }),
      // { name: 'wedding-store' }

    // )
  )
)