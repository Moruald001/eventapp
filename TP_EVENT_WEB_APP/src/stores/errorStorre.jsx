//
import { create } from "zustand";

export const useErrorStore = create((set) => ({
  erreur: "",
  setErreur: (data) => set({ erreur: data }),
}));
