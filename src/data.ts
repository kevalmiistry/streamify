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
    user_growth: [
        { month: "Feb", total_users: 500_343_263, active_users: 100_980_109 },
        { month: "Mar", total_users: 516_263_343, active_users: 120_980_109 },
        { month: "Apr", total_users: 525_263_343, active_users: 124_980_109 },
        { month: "May", total_users: 540_263_343, active_users: 134_000_000 },
        { month: "Jun", total_users: 543_263_343, active_users: 160_980_109 },
        { month: "Jul", total_users: 554_263_343, active_users: 148_980_109 },
        { month: "Aug", total_users: 569_263_343, active_users: 155_980_109 },
        { month: "Sep", total_users: 580_263_343, active_users: 166_980_109 },
        { month: "Oct", total_users: 600_263_343, active_users: 170_980_109 },
        { month: "Nov", total_users: 626_263_343, active_users: 179_980_109 },
        { month: "Dec", total_users: 638_263_343, active_users: 180_980_109 },
        { month: "Jan", total_users: 640_263_343, active_users: 190_980_109 },
    ],
    revenue_distribution: [
        { source: "Subscriptions", amount: 55000 },
        { source: "Ads", amount: 22000 },
        { source: "Sponsorships", amount: 15000 },
        { source: "Merchandise", amount: 8000 },
        { source: "Other", amount: 5000 },
    ],
    top_streamed_songs: [
        { song: "Timeless", streams: 61_789_382 },
        { song: "Niagara Falls", streams: 37_073_629 },
        { song: "Take Me Back To LA", streams: 24_715_753 },
        { song: "Cry For Me", streams: 20_073_967 },
        { song: "BIRDS OF A FEATHER", streams: 14_345_003 },
    ],
};
