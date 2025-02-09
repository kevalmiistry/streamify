import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

interface AudioPlayerProps {
    src: string;
}

const AudioPlayer = ({ src }: AudioPlayerProps) => {
    const waveSurferRef = useRef<WaveSurfer | null>(null);
    const waveformContainerRef = useRef<HTMLDivElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!waveformContainerRef.current) return;

        waveSurferRef.current = WaveSurfer.create({
            container: waveformContainerRef.current,
            waveColor: "#cbd5e1",
            progressColor: "#3b82f6",
            cursorWidth: 0,
            barWidth: 3,
            barGap: 3,
            height: 40,
            barRadius: 2,
        });

        waveSurferRef.current.load(src);

        waveSurferRef.current.on("ready", () => {
            console.log("Wavesurfer Ready");
        });

        return () => {
            waveSurferRef.current?.destroy();
        };
    }, [src]);

    const handlePlayPause = () => {
        if (!waveSurferRef.current) return;

        if (waveSurferRef.current.isPlaying()) {
            waveSurferRef.current.pause();
            setIsPlaying(false);
        } else {
            waveSurferRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="flex w-[250px] items-center p-1">
            <Button
                variant="ghost"
                className="flex aspect-square shrink-0 items-center justify-center p-0"
                onClick={handlePlayPause}
            >
                {isPlaying ? (
                    <Pause size="1rem" className="text-slate-600" />
                ) : (
                    <Play size="1rem" className="text-slate-600" />
                )}
            </Button>

            {/* Waveform container */}
            <div className="relative mx-2 h-[40px] w-full">
                <div ref={waveformContainerRef} className="h-full w-full" />
            </div>
        </div>
    );
};

export default AudioPlayer;
