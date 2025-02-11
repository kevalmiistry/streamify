import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { useSongsDataTableStore } from "@/store/useSongsDataTableStore";

const DateStreamedPicker = () => {
    const dateStreamedFilter = useSongsDataTableStore((state) => state.dateStreamedFilter);
    const setDateStreamedFilter = useSongsDataTableStore((state) => state.setDateStreamedFilter);

    console.log("dateStreamedFilter", dateStreamedFilter);

    return (
        <div className="grid gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "min-w-[200px] justify-start px-2 text-left font-normal",
                            !dateStreamedFilter && "text-muted-foreground",
                        )}
                    >
                        <CalendarIcon />
                        {dateStreamedFilter?.from ? (
                            dateStreamedFilter.to ? (
                                <>
                                    {format(dateStreamedFilter.from, "LLL dd, yy")} -{" "}
                                    {format(dateStreamedFilter.to, "LLL dd, yy")}
                                </>
                            ) : (
                                format(dateStreamedFilter.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={dateStreamedFilter?.from}
                        selected={dateStreamedFilter}
                        onSelect={setDateStreamedFilter}
                        numberOfMonths={1}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DateStreamedPicker;
