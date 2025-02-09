import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RevenueDistributionItem } from "@/types";
import { useMemo, useState } from "react";

const chartConfig = {
    Subscriptions: {
        label: "Subscriptions",
        color: "#0b4e4b",
    },
    Ads: {
        label: "Ads",
        color: "#00776f",
    },
    Sponsorships: {
        label: "Sponsorships",
        color: "#00bba6",
    },
    Merchandise: {
        label: "Merchandise",
        color: "#00d4be",
    },
    Other: {
        label: "Other",
        color: "#46ecd4",
    },
} satisfies ChartConfig;

interface Props {
    revenue_distribution: RevenueDistributionItem[];
}
const RevenueDistribution = ({ revenue_distribution }: Props) => {
    const id = "pie-interactive";
    const [activeSource, setActiveSource] = useState(revenue_distribution[0].source);

    const activeIndex = useMemo(
        () => revenue_distribution.findIndex((item) => item.source === activeSource),
        [activeSource, revenue_distribution],
    );

    const sources = useMemo(
        () => revenue_distribution.map((item) => item.source),
        [revenue_distribution],
    );

    return (
        <Card data-chart={id} className="flex flex-col">
            <ChartStyle id={id} config={chartConfig} />

            <CardHeader className="h-24 flex-row items-start space-y-0 pb-0">
                <div className="grid gap-1">
                    <CardTitle>Revenue Distribution</CardTitle>
                    <CardDescription>
                        Shows the breakdown of revenue from different sources
                    </CardDescription>
                </div>

                <Select value={activeSource} onValueChange={setActiveSource}>
                    <SelectTrigger
                        className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Select month" />
                    </SelectTrigger>

                    <SelectContent align="end" className="rounded-xl">
                        {sources.map((key) => {
                            const config = chartConfig[key as keyof typeof chartConfig];

                            if (!config) {
                                return null;
                            }

                            return (
                                <SelectItem
                                    key={key}
                                    value={key}
                                    className="rounded-lg [&_span]:flex"
                                >
                                    <div className="flex items-center gap-2 text-xs">
                                        <span
                                            className="flex h-3 w-3 shrink-0 rounded-sm"
                                            style={{
                                                backgroundColor: `var(--color-${key})`,
                                            }}
                                        />
                                        {config?.label}
                                    </div>
                                </SelectItem>
                            );
                        })}
                    </SelectContent>
                </Select>
            </CardHeader>

            <CardContent className="flex h-[280px] flex-1 justify-center">
                <ChartContainer
                    id={id}
                    config={chartConfig}
                    className="mx-auto aspect-square h-full w-full max-w-[255px]"
                >
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Pie
                            data={revenue_distribution.map((e) => ({
                                ...e,
                                fill: chartConfig[e.source as keyof typeof chartConfig].color,
                            }))}
                            dataKey="amount"
                            nameKey="source"
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                                <g>
                                    <Sector {...props} outerRadius={outerRadius + 10} />
                                    <Sector
                                        {...props}
                                        outerRadius={outerRadius + 25}
                                        innerRadius={outerRadius + 12}
                                    />
                                </g>
                            )}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {revenue_distribution[
                                                        activeIndex
                                                    ].amount.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Visitors
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default RevenueDistribution;
