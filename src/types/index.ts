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
}
