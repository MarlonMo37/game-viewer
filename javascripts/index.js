const movieButton = () => document.getElementById("movie-button")
const buttonDiv = () => document.getElementById("button")
const ulDiv = () => document.getElementById("list")
const ulList = document.getElementById("movie-list")

document.addEventListener("DOMContentLoaded", () => {
    MovieApi.fetchMovies()
    GenreApi.fetchGenres()
    movieButton().addEventListener("click", handleClick)
})

const handleClick = () => {
    if (ulList.hasChildNodes()) {
        ulList.innerText = ""
    } else {
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
            ulList.appendChild(div) 
        })
    }
}
