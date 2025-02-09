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

export interface DashboardData {
    overview_stats: OverviewStats;
    top_artist: TopArtist;
}
