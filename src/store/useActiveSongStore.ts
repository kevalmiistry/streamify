import { create } from "zustand";

type SetStateType<T> = (value: T | ((current: T) => T)) => void;

interface StoreType {
    activeSong: string;
    setActiveSong: SetStateType<string>;
}

export const useActiveSongStore = create<StoreType>((set) => ({
    activeSong: "",
    setActiveSong: (value) => {
        set((state) => ({
            activeSong: typeof value === "function" ? value(state.activeSong) : value,
        }));
    },
}));
