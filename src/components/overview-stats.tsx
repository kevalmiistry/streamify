import { cn, formatNumber } from "@/lib/utils";
import { OverviewStats as OverviewStatsTypes } from "@/types";
import { ArrowDown, ArrowUp, AudioLines, Banknote, UserCheck, Users } from "lucide-react";
import { ReactElement, useState } from "react";
import { Switch } from "./ui/switch";
import { GlowItem } from "./glow";

interface Stats {
    title: string;
    subTitle: string;
    icon: ReactElement;
    accessorKey: keyof OverviewStatsTypes;
    prefix: string;
}

const STATS: Stats[] = [
    {
        title: "Total Users",
        subTitle: "The total number of registered users on the platform.",
        icon: <Users strokeWidth="2.5px" className="h-6 w-6" />,
        accessorKey: "total_users",
        prefix: "",
    },
    {
        title: "Active Users",
        subTitle: "The number of users who have streamed at least one song in the last 30 days.",
        icon: <UserCheck strokeWidth="2.5px" className="h-6 w-6" />,
        accessorKey: "active_users",
        prefix: "",
    },
    {
        title: "Total Streams",
        subTitle: "The total number of song streams on the platform.",
        icon: <AudioLines strokeWidth="2.5px" className="h-6 w-6" />,
        accessorKey: "total_streams",
        prefix: "",
    },
    {
        title: "Revenue",
        subTitle: "The total revenue generated from subscriptions and advertisements.",
        icon: <Banknote strokeWidth="2.5px" className="h-6 w-6" />,
        accessorKey: "revenue",
        prefix: "$",
    },
];

interface Props {
    overview_stats: OverviewStatsTypes;
}
const OverviewStats = ({ overview_stats }: Props) => {
    const [statsViewType, setStatsViewType] = useState<"compact" | "full">("full");

    return (
        <section className="mt-8">
            <div className="flex items-center justify-between">
                <p className="font-semibold">Overview</p>

                <div className="flex items-center justify-end gap-2">
                    <span className="rounded-sm border px-1 text-sm">Compact</span>
                    <Switch
                        checked={statsViewType === "full"}
                        onCheckedChange={(isChecked) =>
                            setStatsViewType(isChecked ? "full" : "compact")
                        }
                    />
                    <span className="rounded border p-1 text-sm">Full</span>
                </div>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {STATS.map((item) => (
                    <GlowItem
                        key={item.title}
                        className="flex-1 rounded-xl"
                        color={
                            overview_stats[item.accessorKey].growth_rate > 0 ? "#22c55e" : "#ef4444"
                        }
                    >
                        <div className="flex h-full flex-1 flex-col justify-between gap-6 rounded-xl border bg-card p-4 text-card-foreground shadow">
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="text-lg font-semibold text-accent-foreground">
                                        {item.title}
                                    </p>
                                    {item.icon}
                                </div>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {item.subTitle}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <p className="flex text-2xl font-bold">
                                    {item.prefix}
                                    {formatNumber(
                                        overview_stats[item.accessorKey].value,
                                        statsViewType === "compact",
                                    )}
                                </p>
                                ·
                                <div
                                    className={cn(
                                        "text flex items-center gap-1 font-medium",
                                        overview_stats[item.accessorKey].growth_rate > 0
                                            ? "text-green-500"
                                            : "text-red-500",
                                    )}
                                >
                                    {overview_stats[item.accessorKey].growth_rate.toLocaleString(
                                        "us",
                                    )}
                                    %
                                    {overview_stats[item.accessorKey].growth_rate > 0 ? (
                                        <ArrowUp className="h-5 w-5 animate-bounce" />
                                    ) : (
                                        <ArrowDown className="h-5 w-5 animate-bounce" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </GlowItem>
                ))}
            </div>
        </section>
    );
};

export default OverviewStats;
