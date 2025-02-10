import { SongsDataItem } from "@/types";
import { DataTableWithStickyColumns } from "./data-table/datatable-with-sticky-columns";
import { commonColumns, groupingModeOffColumns } from "./songs-columns";

interface Props {
    songs_data: SongsDataItem[];
}
const SongsDataTable = ({ songs_data }: Props) => {
    return (
        <section className="flex h-screen flex-col overflow-hidden">
            {songs_data.length > 0 ? (
                <DataTableWithStickyColumns
                    columns={[...groupingModeOffColumns, ...commonColumns]}
                    data={songs_data}
                    enableStickyCols
                />
            ) : (
                "no users"
            )}
        </section>
    );
};

export default SongsDataTable;
