import { ColumnDef } from "@tanstack/react-table";

export type CustomColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
    isSticky?: boolean;
    fixedWidth?: number;
};

export interface Song {
    id: number;
    title: string;
    source: string;
    streams: number;
    image: string;
}

export interface TopArtist {
    name: string;
    image: string;
    totalStreams: number;
    followers: number;
    songs: Song[];
}

export interface OverviewStatItem {
    value: number;
    growth_rate: number;
}
export interface OverviewStats {
    total_users: OverviewStatItem;
    active_users: OverviewStatItem;
    total_streams: OverviewStatItem;
    revenue: OverviewStatItem;
}

export interface UserGrowthItem {
    month: string;
    total_users: number;
    active_users: number;
}

export interface RevenueDistributionItem {
    source: string;
    amount: number;
}

export interface TopStreamedSongItem {
    song: string;
    streams: number;
}

export interface SongsDataItem {
    isGroup: false;
    song_id: string;
    artist_id: string;
    main_artist_name: string;
    featured_artist: string;
    date_streamed: string;
    released_date: string;
    streams_count: number;
    song_title: string;
    album_name: string;
    genre: string;
    duration: string;
    record_label: string;
    main_artist_profile_image: string;
    featured_artist_profile_image: string;
    song_cover_image: string;
}

export interface GroupedByArtistItem {
    isGroup: true;
    artist_id: string;
    main_artist_name: string;
    main_artist_profile_image: string;
    songs: SongsDataItem[];
}

export interface DashboardData {
    overview_stats: OverviewStats;
    top_artist: TopArtist;
    user_growth: UserGrowthItem[];
    revenue_distribution: RevenueDistributionItem[];
    top_streamed_songs: TopStreamedSongItem[];
    songs_data: SongsDataItem[];
    grouped_by_artist_data: GroupedByArtistItem[];
}

export type SelectedSong = Record<SongsDataItem["artist_id"], SongsDataItem["song_id"]>;
