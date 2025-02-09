import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

interface Props {
    src: string;
}

const AudioPlayer = ({ src }: Props) => {
    const waveSurferRef = useRef<WaveSurfer>(null);
    const waveformContainerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (waveformContainerRef.current) {
            waveSurferRef.current = WaveSurfer.create({
                container: waveformContainerRef.current,
                waveColor: "#cbd5e1",
                progressColor: "#14b8a6",
                cursorWidth: 0,
                barWidth: 3,
                barHeight: 2, // Increased for visibility
                barGap: 3,
                height: 30,
                barRadius: 9999,
                fillParent: true,
            });

            waveSurferRef.current.load(src);
        }

        return () => {
            waveSurferRef.current?.destroy();
        };
    }, [src]);

    const togglePlayPause = () => {
        if (waveSurferRef.current) {
            if (isPlaying) {
                waveSurferRef.current.pause();
            } else {
                waveSurferRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="flex w-full items-center md:w-[200px]">
            <div className="flex items-center">
                <Button
                    size="icon"
                    variant="ghost"
                    className="flex shrink-0 items-center justify-center p-0"
                    onClick={togglePlayPause}
                >
                    {isPlaying ? (
                        <Pause size="1rem" className="text-foreground" />
                    ) : (
                        <Play size="1rem" className="text-foreground" />
                    )}
                </Button>
            </div>
            <div ref={waveformContainerRef} className="mx-2 h-[30px] w-full flex-grow" />
        </div>
    );
};

export default AudioPlayer;
