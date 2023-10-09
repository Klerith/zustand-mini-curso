import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { PersonSlice, createPersonSlice } from './person.slice';
import { GuestSlice, createGuestSlice } from './guest.slice';
import { DateSlice, createDateSlice } from './date.slice';






export const useWeddingBoundStore = create<PersonSlice & GuestSlice & DateSlice>()(
  devtools(

    persist(
      (...a) => ({
        ...createPersonSlice(...a),
        ...createGuestSlice(...a),
        ...createDateSlice(...a),
      }),
      { name: 'wedding-store' }

    )
  )
)