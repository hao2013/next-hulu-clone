const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: "トレンド",
        url: `trending/all/week?api_key=${API_KEY}&language=ja`
    },
    fetchTopRated: {
        title: "高評価",
        url: `movie/top_rated?api_key=${API_KEY}&language=ja`
    },
    fetchNowplaying: {
        title: "上映中",
        url: `movie/now_playing?api_key=${API_KEY}&language=ja`
    },          
    fetchAction: {
        title: "アクション", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=28&language=ja`
    },
    fetchComedy: {
        title: "コメディ", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=35&language=ja`
    },
    fetchComedy: {
        title: "サイエンスフィクション", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=878&language=ja`
    },
    fetchThriller: {
        title: "スリラー", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=53&language=ja`
    },
    fetchRomance: {
        title: "ロマンス", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=10749&language=ja`
    },
    fetchFamily: {
        title: "ファミリー", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=10751&language=ja`
    },
    fetchWar: {
        title: "戦争", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=10752&language=ja`
    },
    fetchCrime: {
        title: "犯罪", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=80&language=ja`
    },
    fetchMusic: {
        title: "音楽", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=10402&language=ja`
    },
    fetchHorror: {
        title: "ホラー", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=27&language=ja`
    },
    fetchTvfilm: {
        title: "テレビ映画", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=10770`
    },
    fetchDocumentary: {
        title: "ドキュメンタリー", 
        url: `discover/movie?api_key=${API_KEY}&with_genres=99`
    },
}
