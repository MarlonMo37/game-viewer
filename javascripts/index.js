const movieButton = () => document.getElementById("movie-button")
const buttonDiv = () => document.getElementById("button")
const ulDiv = () => document.getElementById("list")
const ulList = () => document.getElementById("movie-list")

document.addEventListener("DOMContentLoaded", () => {
    MovieApi.fetchMovies()
    GenreApi.fetchGenres()
    movieButton().addEventListener("click", handleClick)
})

const handleClick = () => {
    MovieApi.fetchMovies()
}
