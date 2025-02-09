import { RevenueDistributionItem, TopStreamedSongItem, UserGrowthItem } from "@/types";
import UserGrowthChart from "./user-growth-chart";
import RevenueDistribution from "./revenue-distribution";
import TopStreamedSongs from "./top-streamed-songs";
import { GlowItem } from "./glow";

interface Props {
    user_growth: UserGrowthItem[];
    revenue_distribution: RevenueDistributionItem[];
    top_streamed_songs: TopStreamedSongItem[];
}
const DataVisualization = ({ revenue_distribution, top_streamed_songs, user_growth }: Props) => {
    return (
        <section className="mt-16">
            <p className="font-semibold">Data Visualization</p>
            <p className="text-muted-foreground">User Growth, Revenue, and Top Streams in Charts</p>

            <div className="mt-4 space-y-6">
                <GlowItem className="rounded-xl">
                    <UserGrowthChart user_growth={user_growth} />
                </GlowItem>

                <div className="grid grid-cols-5 gap-6">
                    <GlowItem className="col-span-5 rounded-xl lg:col-span-2">
                        <RevenueDistribution revenue_distribution={revenue_distribution} />
                    </GlowItem>

                    <GlowItem className="col-span-5 rounded-xl lg:col-span-3">
                        <TopStreamedSongs top_streamed_songs={top_streamed_songs} />
                    </GlowItem>
                </div>
            </div>
        </section>
    );
};

export default DataVisualization;
