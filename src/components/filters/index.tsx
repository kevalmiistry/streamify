import { Filter } from "lucide-react";
import { Button } from "../ui/button";
import { GlowItem } from "../glow";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ArtistGroupingSwitch from "./artist-grouping-switch";

const Filters = () => {
    return (
        <div className="flex flex-1 items-center justify-between pr-2">
            <Popover>
                <PopoverTrigger>
                    <GlowItem className="rounded-md">
                        <Button variant="outline">
                            <Filter className="h-4 w-4" />
                            Filters
                        </Button>
                    </GlowItem>
                </PopoverTrigger>

                <PopoverContent className="w-80">Hi</PopoverContent>
            </Popover>

            <ArtistGroupingSwitch />
        </div>
    );
};

export default Filters;
