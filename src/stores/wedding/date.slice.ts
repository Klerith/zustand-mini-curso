import { StateCreator } from 'zustand';



export interface DateSlice {

  eventDate: Date; // number, string, primitivo

  eventYYYYMMDD: () => string;
  eventHHMM: () => string;
  
  setEventDate: (parcialDate: string) => void;
  setEventTime: (eventTime: string) => void;

}


export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({

  eventDate: new Date(),

  eventYYYYMMDD: () => {
    return get().eventDate.toISOString().split('T')[0];
  },
  
  
  eventHHMM: () => {
    const hours = get().eventDate.getHours().toString().padStart(2, '0');  
    const minutes = get().eventDate.getMinutes().toString().padStart(2, '0');

    return `${ hours }:${ minutes }`;
  },


  setEventDate: (parcialDate: string) => set( (state) => {
    const date = new Date(parcialDate);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() + 1;

    const newDate = new Date( state.eventDate );
    newDate.setFullYear(year, month, day);


    return { eventDate: newDate };

  }),

  setEventTime: (eventTime: string) => set( state => { //HH:MM

    const hours = parseInt(eventTime.split(':')[0]);
    const minutes = parseInt(eventTime.split(':')[1]);

    const newDate = new Date(state.eventDate);
    newDate.setHours( hours, minutes );

    return { eventDate: newDate }
  })

})