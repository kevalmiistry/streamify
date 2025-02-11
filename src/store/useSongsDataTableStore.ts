import { SelectedSong } from "@/types";
import { DateRange } from "react-day-picker";
import { create } from "zustand";

type SetStateType<T> = (value: T | ((current: T) => T)) => void;

interface EnabledFilters {
    dateStreamed: boolean;
    streamCount: boolean;
}

interface StoreType {
    groupingModeOn: boolean;
    setGroupingModeOn: SetStateType<boolean>;
    selectedSong: SelectedSong;
    setSelectedSong: SetStateType<SelectedSong>;
    enabledFilters: EnabledFilters;
    setEnabledFilters: SetStateType<EnabledFilters>;
    dateStreamedFilter: DateRange | undefined;
    setDateStreamedFilter: SetStateType<DateRange | undefined>;
    streamsCountFilter: {
        from: number | undefined;
        to: number | undefined;
    };
    setStreamsCountFilter: SetStateType<{
        from: number | undefined;
        to: number | undefined;
    }>;
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
    enabledFilters: {
        dateStreamed: false,
        streamCount: false,
    },
    setEnabledFilters: (value) => {
        set((state) => ({
            enabledFilters: typeof value === "function" ? value(state.enabledFilters) : value,
        }));
    },
    dateStreamedFilter: undefined,
    setDateStreamedFilter: (value) => {
        set((state) => ({
            dateStreamedFilter:
                typeof value === "function" ? value(state.dateStreamedFilter) : value,
        }));
    },
    streamsCountFilter: {
        from: undefined,
        to: undefined,
    },
    setStreamsCountFilter: (value) => {
        set((state) => ({
            streamsCountFilter:
                typeof value === "function" ? value(state.streamsCountFilter) : value,
        }));
    },
}));
