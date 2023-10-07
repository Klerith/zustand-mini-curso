import { create } from 'zustand'


interface BearState {
  blackBears: number,
  polarBears: number,
  pandaBears: number,

  increaseBlackBears: () => void;
  increasePolarBears: () => void;
  increasePandaBears: () => void;
}



export const useBearStore = create<BearState>()((set) => ({
  blackBears: 0,
  polarBears: 0,
  pandaBears: 0,
  
  increaseBlackBears: () => set(state => ({ blackBears: state.blackBears + 1 }) ),
  increasePolarBears: () => set(state => ({ polarBears: state.polarBears + 1 }) ),
  increasePandaBears: () => set(state => ({ pandaBears: state.pandaBears + 1 }) ),
  
}))