
const API_KEY = "ce6fdbfcd37bdc6b179ebdc5213a4e1a";

const requests = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

};

export default requests;


