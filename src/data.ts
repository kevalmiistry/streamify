import { DashboardData } from "./types";

export const data: DashboardData = {
    overview_stats: {
        total_users: {
            value: 640_263_343,
            growth_rate: 10.56,
        },
        active_users: {
            value: 190_980_109,
            growth_rate: -2.45,
        },
        total_streams: {
            value: 324_875_345,
            growth_rate: 30.23,
        },
        revenue: {
            value: 10_087_457,
            growth_rate: -0.76,
        },
    },
    top_artist: {
        followers: 50_659_407,
        image: "./images/weeknd.jpg",
        name: "The Weeknd",
        totalStreams: 123_578_764,
        songs: [
            {
                id: 1,
                source: "https://ik.imagekit.io/culturex/SocialAudio/instagram/516926864308616/516926864308616.mp3",
                streams: 61_789_382,
                title: "Timeless (feat Playboi Carti)",
                image: "./images/timeless.webp",
            },
            {
                id: 2,
                source: "https://ik.imagekit.io/culturex/SocialAudio/instagram/1124536642219082/1124536642219082.mp3",
                streams: 37_073_629,
                title: "Niagara Falls",
                image: "./images/harry-up-tomorrow.jpeg",
            },
            {
                id: 3,
                source: "https://ik.imagekit.io/culturex/SocialAudio/instagram/915733083725803/915733083725803.mp3",
                streams: 24_715_753,
                title: "Take Me Back To LA",
                image: "./images/harry-up-tomorrow.jpeg",
            },
        ],
    },
};
