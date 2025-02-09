export interface OverviewStats {
    total_users: number;
    active_users: number;
    total_streams: number;
    revenue: number;
}

export interface DashboardData {
    overview_stats: OverviewStats;
}
