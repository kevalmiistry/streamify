import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import { GlowItem } from "../glow";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ArtistGroupingSwitch from "./artist-grouping-switch";
import { Switch } from "../ui/switch";
import { useSongsDataTableStore } from "@/store/useSongsDataTableStore";
import DateStreamedPicker from "./date-streamed-picker";
import StreamsCountInput from "./streams-count-input";

const Filters = () => {
    const enabledFilters = useSongsDataTableStore((state) => state.enabledFilters);
    const setEnabledFilters = useSongsDataTableStore((state) => state.setEnabledFilters);
    const setDateStreamedFilter = useSongsDataTableStore((state) => state.setDateStreamedFilter);
    const setStreamsCountFilter = useSongsDataTableStore((state) => state.setStreamsCountFilter);

    return (
        <div className="flex w-full flex-1 flex-col items-start justify-between gap-2 pr-2 md:flex-row md:items-center">
            <div className="flex flex-1 flex-col flex-wrap items-start gap-2 md:flex-row md:items-center">
                <Popover>
                    <PopoverTrigger>
                        <GlowItem className="rounded-md">
                            <Button variant="outline">
                                <Filter className="h-4 w-4" />
                                Filters
                            </Button>
                        </GlowItem>
                    </PopoverTrigger>

                    <PopoverContent className="w-80" align="start">
                        <p className="text-sm text-muted-foreground">Enable/Disable Filters:</p>

                        <div className="mt-2 flex items-center justify-between">
                            <p className="text-sm text-accent-foreground">By Date Streamed</p>

                            <Switch
                                checked={enabledFilters.dateStreamed}
                                onCheckedChange={(isChecked) => {
                                    setEnabledFilters((prev) => ({
                                        ...prev,
                                        dateStreamed: isChecked,
                                    }));
                                    if (!isChecked) setDateStreamedFilter(undefined);
                                }}
                            />
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                            <p className="text-sm text-accent-foreground">By Streams Count</p>

                            <Switch
                                checked={enabledFilters.streamCount}
                                onCheckedChange={(isChecked) => {
                                    setEnabledFilters((prev) => ({
                                        ...prev,
                                        streamCount: isChecked,
                                    }));
                                    if (!isChecked)
                                        setStreamsCountFilter({
                                            from: undefined,
                                            to: undefined,
                                        });
                                }}
                            />
                        </div>
                    </PopoverContent>
                </Popover>

                {enabledFilters.dateStreamed ? <DateStreamedPicker /> : null}

                {enabledFilters.streamCount ? (
                    <>
                        {enabledFilters.dateStreamed ? (
                            <span className="hidden md:block">·</span>
                        ) : null}
                        <StreamsCountInput />
                    </>
                ) : null}
            </div>
            <ArtistGroupingSwitch />
        </div>
    );
};

export default Filters;
