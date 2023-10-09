import { StateCreator } from "zustand";

export interface DateSlice {
  
  eventDate: Date;


  setEventDate: (eventDate: string) => void;
  setEventTime: (eventTime: Date) => void;
}


export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
  
  eventDate: new Date(),

  setEventDate: (partialDate: string) => {
    const date = new Date(partialDate);
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Los meses van de 0 a 11, así que agregamos 1
    const day = date.getDate();
    
    // Formatear la fecha como una cadena "YYYY-MM-DD"
    // const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    const eventDate = get().eventDate;
    eventDate.setFullYear(year, month, day);


    return set({ 
      eventDate: eventDate
    })
  },

  setEventTime: (eventDate: Date) => set({ eventDate }),
  
})