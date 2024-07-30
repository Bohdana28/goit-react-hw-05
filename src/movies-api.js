import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "686c1ec9da8e3a2a1b32d427839bddaf";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODZjMWVjOWRhOGUzYTJhMWIzMmQ0Mjc4MzliZGRhZiIsIm5iZiI6MTcyMjM3MjY5OS42MDM1MjcsInN1YiI6IjY2YTk0ZWJlYzExODQyYTdjOGRhYjM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9QTdc0QpGKwwleLIQbtRC92ZRxKx3k5nIecyY4yERcA";

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getTrendingMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

export const getMovieCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
};