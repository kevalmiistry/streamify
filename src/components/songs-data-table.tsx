import { GroupedByArtistItem, CustomColumnDef, SongsDataItem } from "@/types";
import { DataTableWithStickyColumns } from "./data-table/datatable-with-sticky-columns";
import { commonColumns, groupingModeOffColumns, groupingModeOnColumns } from "./songs-columns";
import Filters from "./filters";
import { useSongsDataTableStore } from "@/store/useSongsDataTableStore";
import { useEffect, useMemo } from "react";
import { DateRange } from "react-day-picker";

const filterByDate = (s: SongsDataItem, dateStreamedFilter: DateRange): boolean => {
    const dateStreamedDate = new Date(s.date_streamed);

    return (
        dateStreamedDate > (dateStreamedFilter.from as Date) &&
        dateStreamedDate < (dateStreamedFilter.to as Date)
    );
};

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

    const enabledFilters = useSongsDataTableStore((state) => state.enabledFilters);
    const dateStreamedFilter = useSongsDataTableStore((state) => state.dateStreamedFilter);

    const data: (GroupedByArtistItem | SongsData)[] = useMemo(() => {
        let data = groupingModeOn ? grouped_by_artist_data : songs_data;

        if (
            enabledFilters.dateStreamed &&
            dateStreamedFilter &&
            dateStreamedFilter.from !== undefined &&
            dateStreamedFilter.to !== undefined
        ) {
            data = groupingModeOn
                ? grouped_by_artist_data
                      .map((e) => ({
                          ...e,
                          songs: e.songs.filter((s) => filterByDate(s, dateStreamedFilter)),
                      }))
                      .filter((e) => e.songs.length > 0)
                : songs_data.filter((s) => filterByDate(s, dateStreamedFilter));

            if (groupingModeOn) {
                data.forEach((e) => {
                    const item = e as GroupedByArtistItem;
                    setSelectedSong((prev) => ({
                        ...prev,
                        [e.artist_id]: item.songs[0].song_id,
                    }));
                });
            }
        }

        return data;
    }, [
        groupingModeOn,
        grouped_by_artist_data,
        songs_data,
        enabledFilters.dateStreamed,
        dateStreamedFilter,
        setSelectedSong,
    ]);

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

    return (
        <section className="bb mt-16 flex h-screen flex-col overflow-hidden pt-4">
            <p className="font-semibold">Recently Streamed Songs</p>
            <p className="text-muted-foreground">
                Recently Streamed Songs in Data Table with Search, Filtering &{" "}
                <strong>Artist Grouping</strong> mode
            </p>

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
