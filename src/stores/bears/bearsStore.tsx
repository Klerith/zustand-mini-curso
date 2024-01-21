import { create } from 'zustand';

export type BearType = 'bearBlack' | 'bearPanda' | 'bearPolar';

interface IBears {
  bearBlack: number;
  bearPanda: number;
  bearPolar: number;

  increaseBear: (type: BearType, by: number) => void;
  decreaseBear: (type: BearType, by: number) => void;
}

export const useBearsStore = create<IBears>((set) => ({
  bearBlack: 10,
  bearPanda: 20,
  bearPolar: 30,

  increaseBear: (type, by: number) =>
    set((state) => ({ [type]: state[type] + by })),
  decreaseBear: (type, by: number) =>
    set((state) => ({ [type]: Math.max(0, state[type] - by) })),
}));
