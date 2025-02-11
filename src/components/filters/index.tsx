import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import { GlowItem } from "../glow";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ArtistGroupingSwitch from "./artist-grouping-switch";
import { Switch } from "../ui/switch";
import { useSongsDataTableStore } from "@/store/useSongsDataTableStore";
import DateStreamedPicker from "./date-streamed-picker";

const Filters = () => {
    const enabledFilters = useSongsDataTableStore((state) => state.enabledFilters);
    const setEnabledFilters = useSongsDataTableStore((state) => state.setEnabledFilters);
    const setDateStreamedFilter = useSongsDataTableStore((state) => state.setDateStreamedFilter);

    return (
        <div className="flex flex-1 items-center justify-between pr-2">
            <div className="flex items-center gap-2">
                <Popover>
                    <PopoverTrigger>
                        <GlowItem className="rounded-md">
                            <Button variant="outline">
                                <Filter className="h-4 w-4" />
                                Filters
                            </Button>
                        </GlowItem>
                    </PopoverTrigger>

                    <PopoverContent className="w-80">
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
                    </PopoverContent>
                </Popover>

                {enabledFilters.dateStreamed ? <DateStreamedPicker /> : null}
            </div>
            <ArtistGroupingSwitch />
        </div>
    );
};

export default Filters;
