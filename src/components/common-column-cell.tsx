import { formatDate, formatNumber } from "@/lib/utils";
import { useSongsDataTableStore } from "@/store/useSongsDataTableStore";
import { GroupedByArtistItem, SongsDataItem } from "@/types";

interface CommonColumnCellProps {
    accessorKey: keyof SongsDataItem;
    original: SongsDataItem | GroupedByArtistItem;
}
const CommonColumnCell = ({ accessorKey, original }: CommonColumnCellProps) => {
    const selectedSongId: SongsDataItem["song_id"] = useSongsDataTableStore(
        (state) => state.selectedSong?.[original.artist_id],
    );

    const selectedSongData = original.isGroup
        ? original.songs.find((s) => s.song_id === selectedSongId)
        : original;

    if (!selectedSongData) return null;

    if (typeof selectedSongData[accessorKey] === "number") {
        return formatNumber(selectedSongData[accessorKey], false);
    }

    if (accessorKey === "date_streamed" || accessorKey === "released_date") {
        return formatDate(selectedSongData[accessorKey]);
    }

    return selectedSongData[accessorKey] || "-";
};

export default CommonColumnCell;
