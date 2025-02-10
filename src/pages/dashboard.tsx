import { DataVisualization, OverviewStats, SongsDataTable, TopArtist } from "@/components";
import DashboardSkeleton from "@/components/dashboard-skeleton";
import { GlowArea } from "@/components/glow";
import { data } from "@/data";
import { DashboardData } from "@/types";
import { useQuery } from "@tanstack/react-query";

const getDashboardData = async (): Promise<DashboardData> => {
    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));
    await wait(100);
    return data;
};

const Dashboard = () => {
    const { data: dashboardData, isLoading } = useQuery({
        queryKey: ["dashboard"],
        queryFn: getDashboardData,
    });

    if (isLoading) {
        return <DashboardSkeleton />;
    }

    return dashboardData ? (
        <GlowArea className="mx-auto max-w-7xl p-6 pb-0">
            <div>
                <h1 className="text-2xl font-semibold">Streamify Analytics Dashboard</h1>
                <p className="text-muted-foreground">
                    Track key metrics, visualize trends, and dive into detailed streaming insights.
                </p>
            </div>

            <OverviewStats overview_stats={dashboardData.overview_stats} />

            <TopArtist top_artist={dashboardData.top_artist} />

            <DataVisualization
                user_growth={dashboardData.user_growth}
                top_streamed_songs={dashboardData.top_streamed_songs}
                revenue_distribution={dashboardData.revenue_distribution}
            />

            <SongsDataTable songs_data={dashboardData.songs_data} />
        </GlowArea>
    ) : null;
};

export default Dashboard;
