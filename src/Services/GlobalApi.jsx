import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "d37c8fa6361d326a100ac8ac63d22694";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=d37c8fa6361d326a100ac8ac63d22694";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
