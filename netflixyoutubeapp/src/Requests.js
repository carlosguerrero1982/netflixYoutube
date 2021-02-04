const apiKey = '594ddde7c03441d71e5a2460bf8b932c';


const requests={

    fetchTrending:`/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${apiKey}&with_genres=99`,
    fetchMistery:`/discover/movie?api_key=${apiKey}&with_genres=9648`,
    fetchSciFi:`/discover/movie?api_key=${apiKey}&with_genres=878`,
    fetchWestern:`/discover/movie?api_key=${apiKey}&with_genres=37`,
    fetchAnimation:`/discover/movie?api_key=${apiKey}&with_genres=16`,
    fetchTV:`/discover/movie?api_key=${apiKey}&with_genres=10770`,
    
};

export default requests;
