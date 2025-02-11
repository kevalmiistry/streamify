import { GroupedByArtistItem, CustomColumnDef, SongsDataItem } from "@/types";
import { DataTableWithStickyColumns } from "./data-table/datatable-with-sticky-columns";
import { commonColumns, groupingModeOffColumns, groupingModeOnColumns } from "./songs-columns";
import Filters from "./filters";
import { useSongsDataTableStore } from "@/store/useSongsDataTableStore";
import { useEffect } from "react";

interface SongsData extends SongsDataItem {
    isGroup: false;
}

interface Props {
    songs_data: SongsDataItem[];
    grouped_by_artist_data: GroupedByArtistItem[];
}
const SongsDataTable = ({ songs_data, grouped_by_artist_data }: Props) => {
    const groupingModeOn = useSongsDataTableStore((state) => state.groupingModeOn);
    const setSelectedSong = useSongsDataTableStore((state) => state.setSelectedSong);

    useEffect(() => {
        grouped_by_artist_data.forEach((e) => {
            setSelectedSong((prev) => ({
                ...prev,
                [e.artist_id]: e.songs[0].song_id,
            }));
        });
    }, [grouped_by_artist_data, setSelectedSong]);

    const columns = (
        groupingModeOn
            ? [...groupingModeOnColumns, ...commonColumns]
            : [...groupingModeOffColumns, ...commonColumns]
    ) as CustomColumnDef<SongsDataItem | GroupedByArtistItem, unknown>[];

    const data: (GroupedByArtistItem | SongsData)[] = groupingModeOn
        ? grouped_by_artist_data
        : songs_data;

    return (
        <section className="flex h-screen flex-col overflow-hidden">
            {songs_data.length > 0 ? (
                <DataTableWithStickyColumns columns={columns} data={data} enableStickyCols>
                    <Filters />
                </DataTableWithStickyColumns>
            ) : (
                "no data"
            )}
        </section>
    );
};

export default SongsDataTable;
