import { SelectedSong } from "@/types";
import { create } from "zustand";

type SetStateType<T> = (value: T | ((current: T) => T)) => void;

interface StoreType {
    groupingModeOn: boolean;
    setGroupingModeOn: SetStateType<boolean>;
    selectedSong: SelectedSong;
    setSelectedSong: SetStateType<SelectedSong>;
}

export const useSongsDataTableStore = create<StoreType>((set) => ({
    groupingModeOn: false,
    setGroupingModeOn: (value) => {
        set((state) => ({
            groupingModeOn: typeof value === "function" ? value(state.groupingModeOn) : value,
        }));
    },
    selectedSong: {},
    setSelectedSong: (value) => {
        set((state) => ({
            selectedSong: typeof value === "function" ? value(state.selectedSong) : value,
        }));
    },
}));
