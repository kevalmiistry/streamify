import { useSongsDataTableStore } from "@/store/useSongsDataTableStore";
import { Input } from "../ui/input";

const StreamsCountInput = () => {
    const streamsCountFilter = useSongsDataTableStore((state) => state.streamsCountFilter);
    const setStreamsCountFilter = useSongsDataTableStore((state) => state.setStreamsCountFilter);

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Streams Count</span>

            <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">from:</span>
                <Input
                    type="number"
                    value={streamsCountFilter.from}
                    onChange={(e) => {
                        setStreamsCountFilter((prev) => ({
                            ...prev,
                            from: e.target.value ? Number(e.target.value) : undefined,
                        }));
                    }}
                    className="hide-steppers w-[90px]"
                />
            </div>

            <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">to:</span>
                <Input
                    type="number"
                    value={streamsCountFilter.to}
                    onChange={(e) => {
                        setStreamsCountFilter((prev) => ({
                            ...prev,
                            to: e.target.value ? Number(e.target.value) : undefined,
                        }));
                    }}
                    className="hide-steppers w-[90px]"
                />
            </div>
        </div>
    );
};

export default StreamsCountInput;
