import { OverviewStats } from "@/components";
import { GlowArea } from "@/components/glow";
import { DashboardData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getDashboardData = async (): Promise<DashboardData> => {
    const { data } = await axios.get<DashboardData>("/api/dashboard");
    return data;
};

const Dashboard = () => {
    const { data: dashboardData, isLoading } = useQuery({
        queryKey: ["dashboard"],
        queryFn: getDashboardData,
    });

    if (isLoading) {
        return <>loading...</>;
    }

    return dashboardData ? (
        <GlowArea className="container mx-auto space-y-8 p-6">
            <div className="">
                <h1 className="text-2xl font-semibold">Streamify Analytics Dashboard</h1>
                <p className="text-muted-foreground">
                    Track key metrics, visualize trends, and dive into detailed streaming insights.
                </p>
            </div>

            <OverviewStats overview_stats={dashboardData.overview_stats} />
        </GlowArea>
    ) : null;
};

export default Dashboard;
