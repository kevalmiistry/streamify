import { Sparkles } from "lucide-react";
import { GlowItem } from "../glow";
import { Switch } from "../ui/switch";
import { useSongsDataTableStore } from "@/store/useSongsDataTableStore";

const ArtistGroupingSwitch = () => {
    const groupingModeOn = useSongsDataTableStore((state) => state.groupingModeOn);
    const setGroupingModeOn = useSongsDataTableStore((state) => state.setGroupingModeOn);

    return (
        <GlowItem className="rounded-md">
            <div className="flex h-9 items-center justify-between gap-2 rounded-md border border-dotted px-4">
                <label
                    htmlFor="grouping"
                    className="flex cursor-pointer select-none items-center gap-2 text-sm font-medium"
                >
                    <Sparkles className="h-4 w-4" />
                    Artist Grouping
                </label>
                <Switch
                    id="grouping"
                    checked={groupingModeOn}
                    onCheckedChange={setGroupingModeOn}
                />
            </div>
        </GlowItem>
    );
};

export default ArtistGroupingSwitch;
