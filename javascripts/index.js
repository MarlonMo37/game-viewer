const movieButton = () => document.getElementById("movie-button")
const genreButton = () => document.getElementById("genre-button")

const buttonDiv = () => document.getElementById("buttons")

const movies = () => document.getElementById("movies")
const movieList = document.getElementById("movie-list")

const genres = () => document.getElementById("genres")
const genreList = document.getElementById("genre-list")


document.addEventListener("DOMContentLoaded", () => {
    MovieApi.fetchMovies()
    GenreApi.fetchGenres()
    genreButton().addEventListener("click", handleGenresClick)
    movieButton().addEventListener("click", handleMovieClick)
})

const handleMovieClick = () => {
    genreList.innerText = ""

    // if (movieList.hasChildNodes()) {
    //     movieList.innerText = ""
    // } else {
        Movie.all.forEach( movie => {
            const div = document.createElement("div")
        
            div.innerHTML = `
            <table>
                <tr>
                    <th>
                        <img src="${movie.poster_url}">
                    </th>
                    <td>
                        <h2>${movie.title}</h2>
                        <h3>Release Date: ${movie.release_date}</h3>
                        <h3>Summary: ${movie.summary}</h3>
                        <h3>Audience Rating: ${movie.audience_rating}/10<h3>

                    </td>
                </tr>  
            </table>
            `
            movieList.appendChild(div) 
        })
    // }
}

const handleGenresClick = () => {
    movieList.innerText = ""

    if (!genreList.hasChildNodes() || document.getElementById("Comedy-genre")) {
        genreList.innerText = ""

        Genre.all.forEach( genre => {
            const div = document.createElement("div")
            div.id = `${genre.name}-info`

            div.innerHTML = `<h2 id="${genre.name}-genre">${genre.name}</h2>`

            div.addEventListener("click", genre.renderMovies)

            genreList.appendChild(div)
        })
    } 
    
    // else {
    //     genreList.innerText = ""
    // }

}

