import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { TopStreamedSongItem } from "@/types";
import { formatNumber } from "@/lib/utils";

const chartConfig = {
    streams: {
        label: "Streams",
        color: "#00bba6",
    },
} satisfies ChartConfig;

interface Props {
    top_streamed_songs: TopStreamedSongItem[];
}
const TopStreamedSongs = ({ top_streamed_songs }: Props) => {
    return (
        <Card>
            <CardHeader className="h-24">
                <CardTitle>Bar Chart - Label</CardTitle>
                <CardDescription>
                    Shows the top 5 most-streamed songs over the past 30 days.
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[280px]">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <BarChart
                        accessibilityLayer
                        data={top_streamed_songs}
                        margin={{
                            top: 20,
                        }}
                        barSize={50}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="song"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

                        <ChartLegend content={<ChartLegendContent />} />

                        <Bar dataKey="streams" fill="var(--color-streams)" radius={8} height={270}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                                formatter={(val: number) => formatNumber(val, true)}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default TopStreamedSongs;
