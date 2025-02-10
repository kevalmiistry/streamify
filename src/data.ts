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
                source: "./audios/Timeless.mp3",
                streams: 61_789_382,
                title: "Timeless (feat Playboi Carti)",
                image: "./images/timeless.webp",
            },
            {
                id: 2,
                source: "./audios/Niagara-Falls.mp3",
                streams: 37_073_629,
                title: "Niagara Falls",
                image: "./images/harry-up-tomorrow.jpeg",
            },
            {
                id: 3,
                source: "./audios/Take-Me-Back-To-LA.mp3",
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
    songs_data: [
        {
            song_id: "song_001",
            artist_id: "artist_001",
            main_artist_name: "The Weeknd",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2019-11-29",
            streams_count: 2500000000,
            song_title: "Blinding Lights",
            album_name: "After Hours",
            genre: "Synth-pop",
            duration: "3:20",
            record_label: "XO",
            main_artist_profile_image: "./images/weeknd.jpg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Blinding_Lights.jpeg",
        },
        {
            song_id: "song_002",
            artist_id: "artist_001",
            main_artist_name: "The Weeknd",
            featured_artist: "Daft Punk",
            date_streamed: "2025-02-10",
            released_date: "2016-09-25",
            streams_count: 1800000000,
            song_title: "Starboy",
            album_name: "Starboy",
            genre: "R&B/Pop",
            duration: "3:50",
            record_label: "XO",
            main_artist_profile_image: "./images/weeknd.jpg",
            featured_artist_profile_image: "./images/Daft_Punk.jpeg",
            song_cover_image: "./images/Starboy.jpeg",
        },
        {
            song_id: "song_043",
            artist_id: "artist_027",
            main_artist_name: "Lady Gaga",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2009-10-26",
            streams_count: 1600000000,
            song_title: "Bad Romance",
            album_name: "The Fame Monster",
            genre: "Pop",
            duration: "4:54",
            record_label: "Interscope",
            main_artist_profile_image: "./images/Lady_Gaga.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Bad_Romance.jpeg",
        },
        {
            song_id: "song_044",
            artist_id: "artist_027",
            main_artist_name: "Lady Gaga",
            featured_artist: "Bradley Cooper",
            date_streamed: "2025-02-10",
            released_date: "2018-10-05",
            streams_count: 1300000000,
            song_title: "Shallow",
            album_name: "A Star Is Born",
            genre: "Pop",
            duration: "3:37",
            record_label: "Interscope",
            main_artist_profile_image: "./images/Lady_Gaga.jpeg",
            featured_artist_profile_image: "./images/Bradley_Cooper.jpeg",
            song_cover_image: "./images/Shallow.jpeg",
        },
        {
            song_id: "song_045",
            artist_id: "artist_023",
            main_artist_name: "The Chainsmokers",
            featured_artist: "Halsey",
            date_streamed: "2025-02-10",
            released_date: "2016-07-29",
            streams_count: 2100000000,
            song_title: "Closer",
            album_name: "Collage",
            genre: "EDM/Pop",
            duration: "4:05",
            record_label: "Disruptor/Columbia",
            main_artist_profile_image: "./images/The_Chainsmokers.jpeg",
            featured_artist_profile_image: "./images/Halsey.jpeg",
            song_cover_image: "./images/Closer.jpeg",
        },
        {
            song_id: "song_046",
            artist_id: "artist_023",
            main_artist_name: "The Chainsmokers",
            featured_artist: "Daya",
            date_streamed: "2025-02-10",
            released_date: "2016-02-05",
            streams_count: 1500000000,
            song_title: "Don't Let Me Down",
            album_name: "Collage",
            genre: "EDM/Pop",
            duration: "3:28",
            record_label: "Disruptor/Columbia",
            main_artist_profile_image: "./images/The_Chainsmokers.jpeg",
            featured_artist_profile_image: "./images/Daya.jpeg",
            song_cover_image: "./images/Don't_Let_Me_Down.jpeg",
        },
        {
            song_id: "song_003",
            artist_id: "artist_002",
            main_artist_name: "Playboi Carti",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2019-03-14",
            streams_count: 500000000,
            song_title: "Magnolia",
            album_name: "Die Lit",
            genre: "Hip-Hop",
            duration: "3:00",
            record_label: "Interscope",
            main_artist_profile_image: "./images/Playboi_Carti.jpg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Magnolia.jpeg",
        },
        {
            song_id: "song_004",
            artist_id: "artist_002",
            main_artist_name: "Playboi Carti",
            featured_artist: "Lil Uzi Vert",
            date_streamed: "2025-02-10",
            released_date: "2020-12-05",
            streams_count: 400000000,
            song_title: "Shoota",
            album_name: "Whole Lotta Red",
            genre: "Hip-Hop",
            duration: "3:30",
            record_label: "Interscope",
            main_artist_profile_image: "./images/Playboi_Carti.jpg",
            featured_artist_profile_image: "./images/Lil_Uzi_Vert.jpeg",
            song_cover_image: "./images/Shoota.jpeg",
        },
        {
            song_id: "song_005",
            artist_id: "artist_003",
            main_artist_name: "Kanye West",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2007-07-31",
            streams_count: 1500000000,
            song_title: "Stronger",
            album_name: "Graduation",
            genre: "Hip-Hop/Electronic",
            duration: "5:12",
            record_label: "Roc-A-Fella",
            main_artist_profile_image: "./images/Kanye_West.webp",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Stronger.jpeg",
        },
        {
            song_id: "song_006",
            artist_id: "artist_003",
            main_artist_name: "Kanye West",
            featured_artist: "Jamie Foxx",
            date_streamed: "2025-02-10",
            released_date: "2005-08-30",
            streams_count: 1400000000,
            song_title: "Gold Digger",
            album_name: "Late Registration",
            genre: "Hip-Hop",
            duration: "3:54",
            record_label: "Roc-A-Fella",
            main_artist_profile_image: "./images/Kanye_West.webp",
            featured_artist_profile_image: "./images/Jamie_Foxx.jpeg",
            song_cover_image: "./images/Gold_Digger.jpeg",
        },
        {
            song_id: "song_007",
            artist_id: "artist_004",
            main_artist_name: "Tyler, The Creator",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2019-05-17",
            streams_count: 700000000,
            song_title: "EARFQUAKE",
            album_name: "Igor",
            genre: "Hip-Hop",
            duration: "3:39",
            record_label: "Columbia",
            main_artist_profile_image: "./images/Tyler,_The_Creator.jpg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/EARFQUAKE.jpeg",
        },
        {
            song_id: "song_008",
            artist_id: "artist_004",
            main_artist_name: "Tyler, The Creator",
            featured_artist: "Kali Uchis",
            date_streamed: "2025-02-10",
            released_date: "2017-07-27",
            streams_count: 600000000,
            song_title: "See You Again",
            album_name: "Flower Boy",
            genre: "Hip-Hop/Alternative",
            duration: "4:12",
            record_label: "Columbia",
            main_artist_profile_image: "./images/Tyler,_The_Creator.jpg",
            featured_artist_profile_image: "./images/Kali_Uchis.jpeg",
            song_cover_image: "./images/See_You_Again.jpeg",
        },
        {
            song_id: "song_009",
            artist_id: "artist_005",
            main_artist_name: "Kali Uchis",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2021-03-25",
            streams_count: 900000000,
            song_title: "Telepatía",
            album_name: "Sin Miedo (del Amor y Otros Demonios)",
            genre: "R&B/Pop",
            duration: "3:40",
            record_label: "Virgin EMI",
            main_artist_profile_image: "./images/Kali_Uchis.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Telepatia.jpeg",
        },
        {
            song_id: "song_011",
            artist_id: "artist_006",
            main_artist_name: "Juice WRLD",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2018-05-04",
            streams_count: 1000000000,
            song_title: "Lucid Dreams",
            album_name: "Goodbye & Good Riddance",
            genre: "Hip-Hop/Emo Rap",
            duration: "3:57",
            record_label: "Grade A Productions",
            main_artist_profile_image: "./images/Juice_WRLD.webp",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Lucid_Dreams.jpeg",
        },
        {
            song_id: "song_012",
            artist_id: "artist_006",
            main_artist_name: "Juice WRLD",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2019-06-21",
            streams_count: 600000000,
            song_title: "Robbery",
            album_name: "Death Race for Love",
            genre: "Hip-Hop",
            duration: "2:55",
            record_label: "Grade A Productions",
            main_artist_profile_image: "./images/Juice_WRLD.webp",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Robbery.jpeg",
        },
        {
            song_id: "song_013",
            artist_id: "artist_007",
            main_artist_name: "Eminem",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2002-10-28",
            streams_count: 2000000000,
            song_title: "Lose Yourself",
            album_name: "8 Mile",
            genre: "Hip-Hop",
            duration: "5:26",
            record_label: "Aftermath/Interscope",
            main_artist_profile_image: "./images/Eminem.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Lose_Yourself.jpeg",
        },
        {
            song_id: "song_014",
            artist_id: "artist_007",
            main_artist_name: "Eminem",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2010-04-29",
            streams_count: 1200000000,
            song_title: "Not Afraid",
            album_name: "Recovery",
            genre: "Hip-Hop",
            duration: "4:08",
            record_label: "Aftermath/Interscope",
            main_artist_profile_image: "./images/Eminem.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Not_Afraid.jpeg",
        },
        {
            song_id: "song_015",
            artist_id: "artist_008",
            main_artist_name: "Bruno Mars",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2010-07-20",
            streams_count: 1000000000,
            song_title: "Just the Way You Are",
            album_name: "Doo-Wops & Hooligans",
            genre: "Pop",
            duration: "3:40",
            record_label: "Atlantic",
            main_artist_profile_image: "./images/Bruno_Mars.jpg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Just_the_Way_You_Are.jpeg",
        },
        {
            song_id: "song_016",
            artist_id: "artist_008",
            main_artist_name: "Bruno Mars",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2016-11-18",
            streams_count: 900000000,
            song_title: "24K Magic",
            album_name: "24K Magic",
            genre: "Funk/Pop",
            duration: "3:46",
            record_label: "Atlantic",
            main_artist_profile_image: "./images/Bruno_Mars.jpg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/24K_Magic.jpeg",
        },
        {
            song_id: "song_017",
            artist_id: "artist_009",
            main_artist_name: "Tame Impala",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2015-11-06",
            streams_count: 800000000,
            song_title: "The Less I Know the Better",
            album_name: "Currents",
            genre: "Psychedelic Rock",
            duration: "3:36",
            record_label: "Modular Recordings",
            main_artist_profile_image: "./images/Tame_Impala.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/The_Less_I_Know_the_Better.jpeg",
        },
        {
            song_id: "song_018",
            artist_id: "artist_009",
            main_artist_name: "Tame Impala",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2012-02-14",
            streams_count: 700000000,
            song_title: "Feels Like We Only Go Backwards",
            album_name: "Lonerism",
            genre: "Psychedelic Rock",
            duration: "3:43",
            record_label: "Modular Recordings",
            main_artist_profile_image: "./images/Tame_Impala.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Feels_Like_We_Only_Go_Backwards.jpeg",
        },
        {
            song_id: "song_019",
            artist_id: "artist_010",
            main_artist_name: "Nirvana",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "1991-09-10",
            streams_count: 2200000000,
            song_title: "Smells Like Teen Spirit",
            album_name: "Nevermind",
            genre: "Grunge",
            duration: "5:01",
            record_label: "DGC",
            main_artist_profile_image: "./images/Nirvana.avif",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Smells_Like_Teen_Spirit.jpeg",
        },
        {
            song_id: "song_020",
            artist_id: "artist_010",
            main_artist_name: "Nirvana",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "1991-03-02",
            streams_count: 1800000000,
            song_title: "Come As You Are",
            album_name: "Nevermind",
            genre: "Grunge",
            duration: "3:38",
            record_label: "DGC",
            main_artist_profile_image: "./images/Nirvana.avif",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Come_As_You_Are.jpeg",
        },
        {
            song_id: "song_021",
            artist_id: "artist_011",
            main_artist_name: "Dua Lipa",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2020-03-27",
            streams_count: 1000000000,
            song_title: "Levitating",
            album_name: "Future Nostalgia",
            genre: "Pop/Disco",
            duration: "3:23",
            record_label: "Warner",
            main_artist_profile_image: "./images/Dua_Lipa.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Levitating.jpeg",
        },
        {
            song_id: "song_022",
            artist_id: "artist_011",
            main_artist_name: "Dua Lipa",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2019-11-01",
            streams_count: 1100000000,
            song_title: "Don't Start Now",
            album_name: "Future Nostalgia",
            genre: "Pop/Disco",
            duration: "3:03",
            record_label: "Warner",
            main_artist_profile_image: "./images/Dua_Lipa.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Don't_Start_Now.jpeg",
        },
        {
            song_id: "song_023",
            artist_id: "artist_012",
            main_artist_name: "Coldplay",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2008-05-25",
            streams_count: 1500000000,
            song_title: "Viva La Vida",
            album_name: "Viva la Vida or Death and All His Friends",
            genre: "Alternative Rock",
            duration: "4:02",
            record_label: "Parlophone",
            main_artist_profile_image: "./images/Coldplay.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Viva_La_Vida.jpeg",
        },
        {
            song_id: "song_024",
            artist_id: "artist_012",
            main_artist_name: "Coldplay",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2005-09-05",
            streams_count: 1400000000,
            song_title: "Fix You",
            album_name: "X&Y",
            genre: "Alternative Rock",
            duration: "4:55",
            record_label: "Parlophone",
            main_artist_profile_image: "./images/Coldplay.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Fix_You.jpeg",
        },
        {
            song_id: "song_025",
            artist_id: "artist_013",
            main_artist_name: "Metro Boomin",
            featured_artist: "Gunna",
            date_streamed: "2025-02-10",
            released_date: "2019-11-22",
            streams_count: 600000000,
            song_title: "Space Cadet",
            album_name: "Not All Heroes Wear Capes",
            genre: "Trap",
            duration: "3:12",
            record_label: "Boominati Worldwide",
            main_artist_profile_image: "./images/Metro_Boomin.jpeg",
            featured_artist_profile_image: "./images/Gunna.jpeg",
            song_cover_image: "./images/Space_Cadet.jpeg",
        },
        {
            song_id: "song_026",
            artist_id: "artist_013",
            main_artist_name: "Metro Boomin",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2017-10-27",
            streams_count: 500000000,
            song_title: "No Complaints",
            album_name: "Not All Heroes Wear Capes",
            genre: "Trap",
            duration: "3:45",
            record_label: "Boominati Worldwide",
            main_artist_profile_image: "./images/Metro_Boomin.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/No_Complaints.jpeg",
        },
        {
            song_id: "song_027",
            artist_id: "artist_014",
            main_artist_name: "The Neighbourhood",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2013-03-12",
            streams_count: 1700000000,
            song_title: "Sweater Weather",
            album_name: "I Love You.",
            genre: "Indie Rock",
            duration: "3:59",
            record_label: "Columbia",
            main_artist_profile_image: "./images/The_Neighbourhood.jpg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Sweater_Weather.jpeg",
        },
        {
            song_id: "song_028",
            artist_id: "artist_014",
            main_artist_name: "The Neighbourhood",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2015-05-19",
            streams_count: 800000000,
            song_title: "Afraid",
            album_name: "Wiped Out!",
            genre: "Indie Rock",
            duration: "4:08",
            record_label: "Columbia",
            main_artist_profile_image: "./images/The_Neighbourhood.jpg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Afraid.jpeg",
        },
        {
            song_id: "song_029",
            artist_id: "artist_015",
            main_artist_name: "Billie Eilish",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2019-03-29",
            streams_count: 1900000000,
            song_title: "Bad Guy",
            album_name: "When We All Fall Asleep, Where Do We Go?",
            genre: "Pop/Electropop",
            duration: "3:14",
            record_label: "Interscope",
            main_artist_profile_image: "./images/Billie_Eilish.jpg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Bad_Guy.jpeg",
        },
        {
            song_id: "song_030",
            artist_id: "artist_015",
            main_artist_name: "Billie Eilish",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2020-11-12",
            streams_count: 900000000,
            song_title: "Therefore I Am",
            album_name: "Happier Than Ever",
            genre: "Pop",
            duration: "2:54",
            record_label: "Interscope",
            main_artist_profile_image: "./images/Billie_Eilish.jpg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Therefore_I_Am.jpeg",
        },
        {
            song_id: "song_031",
            artist_id: "artist_016",
            main_artist_name: "Rosé",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2021-03-05",
            streams_count: 800000000,
            song_title: "On the Ground",
            album_name: "R",
            genre: "Pop",
            duration: "3:17",
            record_label: "YG Entertainment",
            main_artist_profile_image: "./images/Rose.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/On_the_Ground.jpeg",
        },
        {
            song_id: "song_032",
            artist_id: "artist_016",
            main_artist_name: "Rosé",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2021-10-08",
            streams_count: 600000000,
            song_title: "Gone",
            album_name: "R",
            genre: "Pop",
            duration: "3:46",
            record_label: "YG Entertainment",
            main_artist_profile_image: "./images/Rose.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Gone.jpeg",
        },
        {
            song_id: "song_033",
            artist_id: "artist_017",
            main_artist_name: "Kendrick Lamar",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2017-03-30",
            streams_count: 1600000000,
            song_title: "HUMBLE.",
            album_name: "DAMN.",
            genre: "Hip-Hop",
            duration: "2:57",
            record_label: "Top Dawg/Aftermath",
            main_artist_profile_image: "./images/Kendrick_Lamar.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/HUMBLE..jpeg",
        },
        {
            song_id: "song_034",
            artist_id: "artist_017",
            main_artist_name: "Kendrick Lamar",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2015-03-04",
            streams_count: 1500000000,
            song_title: "Alright",
            album_name: "To Pimp a Butterfly",
            genre: "Hip-Hop",
            duration: "3:39",
            record_label: "Top Dawg/Aftermath",
            main_artist_profile_image: "./images/Kendrick_Lamar.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Alright.jpeg",
        },
        {
            song_id: "song_035",
            artist_id: "artist_018",
            main_artist_name: "SZA",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2020-12-11",
            streams_count: 1000000000,
            song_title: "Good Days",
            album_name: "SOS",
            genre: "R&B",
            duration: "4:01",
            record_label: "Top Dawg/RCA",
            main_artist_profile_image: "./images/SZA.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Good_Days.jpeg",
        },
        {
            song_id: "song_036",
            artist_id: "artist_018",
            main_artist_name: "SZA",
            featured_artist: "Ty Dolla $ign",
            date_streamed: "2025-02-10",
            released_date: "2020-09-04",
            streams_count: 700000000,
            song_title: "Hit Different",
            album_name: "SOS",
            genre: "R&B",
            duration: "3:48",
            record_label: "Top Dawg/RCA",
            main_artist_profile_image: "./images/SZA.jpeg",
            featured_artist_profile_image: "./images/Ty_Dolla_$ign.jpeg",
            song_cover_image: "./images/Hit_Different.jpeg",
        },
        {
            song_id: "song_037",
            artist_id: "artist_019",
            main_artist_name: "Sabrina Carpenter",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2017-07-21",
            streams_count: 500000000,
            song_title: "In My Bed",
            album_name: "Emails I Can't Send",
            genre: "Pop",
            duration: "3:25",
            record_label: "Hollywood Records",
            main_artist_profile_image: "./images/Sabrina_Carpenter.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/In_My_Bed.jpeg",
        },
        {
            song_id: "song_038",
            artist_id: "artist_019",
            main_artist_name: "Sabrina Carpenter",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2021-03-26",
            streams_count: 400000000,
            song_title: "Sue Me",
            album_name: "Singular: Act I",
            genre: "Pop",
            duration: "3:05",
            record_label: "Hollywood Records",
            main_artist_profile_image: "./images/Sabrina_Carpenter.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Sue_Me.jpeg",
        },
        {
            song_id: "song_039",
            artist_id: "artist_020",
            main_artist_name: "Post Malone",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2019-08-30",
            streams_count: 1200000000,
            song_title: "Circles",
            album_name: "Hollywood's Bleeding",
            genre: "Pop",
            duration: "3:35",
            record_label: "Republic Records",
            main_artist_profile_image: "./images/Post_Malone.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Circles.jpeg",
        },
        {
            song_id: "song_040",
            artist_id: "artist_020",
            main_artist_name: "Post Malone",
            featured_artist: "21 Savage",
            date_streamed: "2025-02-10",
            released_date: "2017-09-15",
            streams_count: 2000000000,
            song_title: "Rockstar",
            album_name: "Beerbongs & Bentleys",
            genre: "Hip-Hop",
            duration: "3:38",
            record_label: "Republic Records",
            main_artist_profile_image: "./images/Post_Malone.jpeg",
            featured_artist_profile_image: "./images/21_Savage.jpeg",
            song_cover_image: "./images/Rockstar.jpeg",
        },
        {
            song_id: "song_041",
            artist_id: "artist_022",
            main_artist_name: "Avicii",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2013-06-17",
            streams_count: 1800000000,
            song_title: "Wake Me Up",
            album_name: "True",
            genre: "EDM/Pop",
            duration: "4:07",
            record_label: "PRMD",
            main_artist_profile_image: "./images/Avicii.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Wake_Me_Up.jpeg",
        },
        {
            song_id: "song_042",
            artist_id: "artist_022",
            main_artist_name: "Avicii",
            featured_artist: "",
            date_streamed: "2025-02-10",
            released_date: "2011-10-28",
            streams_count: 1700000000,
            song_title: "Levels",
            album_name: "Levels",
            genre: "EDM",
            duration: "5:39",
            record_label: "PRMD",
            main_artist_profile_image: "./images/Avicii.jpeg",
            featured_artist_profile_image: "",
            song_cover_image: "./images/Levels.jpeg",
        },
    ],
};
