import { ChevronsUpDown, Disc } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSongsDataTableStore } from "@/store/useSongsDataTableStore";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { GroupedByArtistItem, SongsDataItem } from "@/types";

interface ArtistWithSongSelectCellProps {
    original: SongsDataItem | GroupedByArtistItem;
}
const ArtistWithSongSelectCell = ({ original }: ArtistWithSongSelectCellProps) => {
    const [open, setOpen] = useState(false);

    const selectedSongId: SongsDataItem["song_id"] = useSongsDataTableStore(
        (state) => state.selectedSong?.[original.artist_id],
    );
    const setSelectedSong = useSongsDataTableStore((state) => state.setSelectedSong);

    const songs = original.isGroup ? original.songs : [original];

    const selectedSong = songs.find((s) => s.song_id === selectedSongId);

    if (!selectedSong) return;

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img
                    src={original.main_artist_profile_image}
                    alt={original.main_artist_name}
                    className="h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full object-cover"
                />

                <p className="min-w-[150px] overflow-hidden truncate font-medium">
                    {original.main_artist_name}
                </p>
            </div>

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger className="flex items-center gap-1 rounded-sm border p-1">
                    <img
                        src={selectedSong.song_cover_image}
                        alt={selectedSong.song_title}
                        className="h-[40px] w-[40px] shrink-0 overflow-hidden rounded-sm object-cover"
                    />
                    <ChevronsUpDown className="h-3 w-3" />
                </PopoverTrigger>
                <PopoverContent className="space-y-2 p-1">
                    <p className="px-2 text-xs text-muted-foreground">{songs.length} Songs:</p>
                    {songs.map((song) => (
                        <Button
                            variant="ghost"
                            className={cn("h-auto w-full p-2", {
                                "bg-accent text-accent-foreground": song.song_id === selectedSongId,
                            })}
                            onClick={() => {
                                setSelectedSong((prev) => ({
                                    ...prev,
                                    [original.artist_id]: song.song_id,
                                }));
                                setOpen(false);
                            }}
                        >
                            <img
                                src={song.song_cover_image}
                                alt={song.song_title}
                                className="h-[40px] w-[40px] shrink-0 overflow-hidden rounded-sm object-cover"
                            />
                            <div className="flex flex-1 items-center gap-2 overflow-hidden">
                                <p className="w-max overflow-hidden truncate font-medium">
                                    {song.song_title}
                                </p>
                                <Disc className="h-4 w-4 shrink-0 text-teal-500" />
                            </div>
                        </Button>
                    ))}
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default ArtistWithSongSelectCell;
