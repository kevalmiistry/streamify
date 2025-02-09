import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { UserGrowthItem } from "@/types";

const chartConfig = {
    total_users: {
        label: "Total Users",
        color: "#14b8a6",
    },
    active_users: {
        label: "Active Users",
        color: "#3b82f6",
    },
} satisfies ChartConfig;

interface Props {
    user_growth: UserGrowthItem[];
}
const UserGrowthChart = ({ user_growth }: Props) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>User Growth Chart</CardTitle>
                <CardDescription>
                    Shows the growth in the number of total users and active users over the past 12
                    months.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[280px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={user_growth}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Line
                            dataKey="total_users"
                            type="natural"
                            stroke="var(--color-total_users)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-total_users)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                        <Line
                            dataKey="active_users"
                            type="natural"
                            stroke="var(--color-active_users)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-active_users)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default UserGrowthChart;
