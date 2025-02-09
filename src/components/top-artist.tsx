import { TopArtist as TopArtistType } from "@/types";
import { GlowItem } from "./glow";
import { AudioLines, Music2, UsersRound } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
// import AudioPlayer from "./audio-player";

interface Props {
    top_artist: TopArtistType;
}
const TopArtist = ({ top_artist }: Props) => {
    return (
        <section className="mt-16">
            <p className="font-semibold">Top Artist</p>
            <p className="text-muted-foreground">
                The Artist who has most streams in the past 30 days.
            </p>

            <div className="mt-4 flex gap-10">
                <div className="flex gap-6 border-r pr-10">
                    <GlowItem className="overflow-hidden rounded-xl">
                        <img
                            src={top_artist.image}
                            alt={top_artist.name}
                            loading="lazy"
                            className="h-64 w-64"
                        />
                    </GlowItem>

                    <div className="mt-4">
                        <p className="flex items-center gap-2 text-4xl font-semibold">
                            {top_artist.name}
                            <Music2 className="h-7 w-7" strokeWidth="3px" />
                        </p>

                        <div className="mt-4 flex items-center gap-2">
                            <TooltipProvider delayDuration={200}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className="flex items-center gap-2 rounded-sm border px-2 font-medium text-accent-foreground">
                                            <AudioLines className="h-4 w-4" />
                                            {formatNumber(top_artist.totalStreams, true)}
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="font-medium">
                                            {formatNumber(top_artist.totalStreams, false)} Streams
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider delayDuration={200}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className="flex items-center gap-2 rounded-sm border px-2 font-medium text-accent-foreground">
                                            <UsersRound className="h-4 w-4" />
                                            {formatNumber(top_artist.followers, true)}
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className="font-medium">
                                            {formatNumber(top_artist.followers, false)} Followers
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>

                <div className="">
                    <p className="font-semibold text-accent-foreground">Top 3 Songs</p>

                    <div className="mt-4 space-y-2">
                        {top_artist.songs.map((song) => (
                            <GlowItem className="rounded-md">
                                <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                    <div className="flex flex-1 items-center gap-2">
                                        <span>{song.id}.</span>
                                        <img
                                            src={song.image}
                                            alt=""
                                            className="w-h-10 h-10 rounded-sm"
                                        />
                                        <span>{song.title}</span>·
                                        <TooltipProvider delayDuration={200}>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <span className="flex items-center gap-1">
                                                        <AudioLines className="h-4 w-4" />
                                                        {formatNumber(song.streams, true)}
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="font-medium">
                                                        {formatNumber(song.streams, false)} Streams
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>

                                    {/* <AudioPlayer src={song.source} /> */}
                                </div>
                            </GlowItem>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopArtist;
