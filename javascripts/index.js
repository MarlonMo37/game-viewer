const movieButton = () => document.getElementById("movie-button")
const genreButton = () => document.getElementById("genre-button")
const reviewButton = () => document.getElementById("review-button")


const buttonDiv = () => document.getElementById("nav-buttons")

const movies = () => document.getElementById("movies")
const movieList = document.getElementById("movie-list")

const genres = () => document.getElementById("genres")
const genreList = document.getElementById("genre-list")

const reviewForm = document.getElementById("review-form")


document.addEventListener("DOMContentLoaded", () => {
    MovieApi.fetchMovies()
    ReviewApi.fetchReviews()
    GenreApi.fetchGenres()
    genreButton().addEventListener("click", Genre.handleGenresClick)
    movieButton().addEventListener("click", Movie.handleMovieClick)
})








