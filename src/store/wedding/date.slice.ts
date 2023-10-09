import { StateCreator } from "zustand";


export interface DateSlice {
  
  eventDate: Date;




  setEventDate: (eventDate: string) => void;
  setEventTime: (eventTime: string) => void;
}


export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
  
  eventDate: new Date(),

  setEventDate: (partialDate: string) => set(state => {

    const date = new Date(partialDate);
    
    const year = date.getFullYear();
    const month = date.getMonth(); // Los meses van de 0 a 11, así que agregamos 1
    const day = date.getDate() + 1;

    const newDate = new Date(state.eventDate);
    newDate.setFullYear(year, month, day);
  
    return { eventDate: newDate }
  }),
 

  setEventTime: (eventTime: string) => set( state => {

    const hours = parseInt(eventTime.split(':')[0]);
    const minutes = parseInt(eventTime.split(':')[1]);

    const newDate = new Date(state.eventDate);
    newDate.setHours(hours, minutes);

    return { eventDate: newDate }
  }),
  
})