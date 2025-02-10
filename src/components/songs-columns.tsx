import { CustomColumnDef, SongsDataItem } from "@/types";
import { ColumnHeader } from "./data-table/column-header";
import { ColumnCell } from "./data-table/column-cell";
import { Disc, DiscAlbum } from "lucide-react";
import { formatDate, formatNumber } from "@/lib/utils";

export const groupingModeOffColumns: CustomColumnDef<SongsDataItem, unknown>[] = [
    {
        accessorKey: "song_title",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-4">
                Song
            </ColumnHeader>
        ),
        cell: ({
            row: {
                original: { song_title, song_cover_image },
            },
            column,
        }) => (
            <ColumnCell
                column={column}
                className="flex items-center gap-2 overflow-hidden px-4 py-2"
            >
                <img
                    src={song_cover_image}
                    alt={song_title}
                    className="h-[40px] w-[40px] shrink-0 overflow-hidden rounded-sm object-cover"
                />
                <div className="flex flex-1 items-center gap-2 overflow-hidden">
                    <p className="w-max overflow-hidden truncate font-medium">{song_title}</p>
                    <Disc className="h-4 w-4 shrink-0 text-teal-500" />
                </div>
            </ColumnCell>
        ),
        isSticky: true,
        fixedWidth: 400,
        enableHiding: false,
    },
    {
        accessorKey: "main_artist_name",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-5">
                Artist
            </ColumnHeader>
        ),
        cell: ({
            row: {
                original: { main_artist_name, main_artist_profile_image },
            },
            column,
        }) => (
            <ColumnCell column={column} className="flex items-center gap-2 px-4 py-2">
                <img
                    src={main_artist_profile_image}
                    alt={main_artist_name}
                    className="h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full object-cover"
                />

                <p className="min-w-[150px] overflow-hidden truncate">{main_artist_name}</p>
            </ColumnCell>
        ),
    },
];

export const commonColumns: CustomColumnDef<SongsDataItem, unknown>[] = [
    {
        accessorKey: "featured_artist",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-5">
                Featured Artist
            </ColumnHeader>
        ),
        cell: ({ row: { original }, column }) => (
            <ColumnCell column={column} className="flex w-max items-center gap-2 px-4 py-2">
                <CommonColumnCell accessorKey="featured_artist" original={original} />
            </ColumnCell>
        ),
    },
    {
        accessorKey: "streams_count",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-5">
                Streams Count
            </ColumnHeader>
        ),
        cell: ({ row: { original }, column }) => (
            <ColumnCell column={column} className="flex w-max items-center gap-2 px-4 py-2">
                <CommonColumnCell accessorKey="streams_count" original={original} />
            </ColumnCell>
        ),
    },
    {
        accessorKey: "duration",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-5">
                Duration
            </ColumnHeader>
        ),
        cell: ({ row: { original }, column }) => (
            <ColumnCell column={column} className="flex items-center gap-2 px-4 py-2">
                <CommonColumnCell accessorKey="duration" original={original} />
            </ColumnCell>
        ),
    },
    {
        accessorKey: "date_streamed",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-5">
                Date Streamed
            </ColumnHeader>
        ),
        sortingFn: "datetime",
        cell: ({ row: { original }, column }) => (
            <ColumnCell column={column} className="flex items-center gap-2 px-4 py-2">
                <CommonColumnCell accessorKey="date_streamed" original={original} />
            </ColumnCell>
        ),
    },
    {
        accessorKey: "released_date",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-5">
                Released Date
            </ColumnHeader>
        ),
        sortingFn: "datetime",
        cell: ({ row: { original }, column }) => (
            <ColumnCell column={column} className="flex items-center gap-2 px-4 py-2">
                <CommonColumnCell accessorKey="released_date" original={original} />
            </ColumnCell>
        ),
    },
    {
        accessorKey: "genre",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-5">
                genre
            </ColumnHeader>
        ),
        cell: ({ row: { original }, column }) => (
            <ColumnCell column={column} className="flex w-max items-center gap-2 px-4 py-2">
                <CommonColumnCell accessorKey="genre" original={original} />
            </ColumnCell>
        ),
    },
    {
        accessorKey: "album_name",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-5">
                Album Name
            </ColumnHeader>
        ),
        cell: ({ row: { original }, column }) => (
            <ColumnCell column={column} className="flex w-max items-center gap-2 px-4 py-2">
                <DiscAlbum className="h-4 w-4 shrink-0" />
                <CommonColumnCell accessorKey="album_name" original={original} />
            </ColumnCell>
        ),
    },
    {
        accessorKey: "record_label",
        header: ({ column }) => (
            <ColumnHeader column={column} className="pl-5">
                Record Label
            </ColumnHeader>
        ),
        cell: ({ row: { original }, column }) => (
            <ColumnCell column={column} className="flex w-max items-center gap-2 px-4 py-2">
                <CommonColumnCell accessorKey="record_label" original={original} />
            </ColumnCell>
        ),
    },
];

interface Props {
    accessorKey: keyof SongsDataItem;
    original: SongsDataItem;
}
const CommonColumnCell = ({ accessorKey, original }: Props) => {
    if (typeof original[accessorKey] === "number") {
        return formatNumber(original[accessorKey], false);
    }

    if (accessorKey === "date_streamed" || accessorKey === "released_date") {
        return formatDate(original[accessorKey]);
    }

    return original[accessorKey] || "-";
};
