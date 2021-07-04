class Movie {

    static all = []

    constructor({audience_rating, genres, poster_url, release_date, reviews = [], summary, title}) {
        this.audience_rating = audience_rating
        this.genres = genres
        this.poster_url = poster_url
        this.release_date = release_date
        this.reviews = reviews
        this.summary = summary
        this.title = title
        Movie.all.push(this)
    }

    static findByName(name) {
        return this.all.find(function(movie) { movie.name === name})
    }

    static findById(id) {
        return this.all.find(movie => movie.id === id)
    }

    static findOrCreateBy(movie) {
        return this.findByName(movie.name) || new Movie(movie)
    }

    static handleMovieClick() {
        genreList.innerText = ""
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
                        <div id="movie-review-button">
                        <button id="add-review-button">Add Review</button>
                        </div
    
                    </td>
                </tr>  
            </table>
            `
                
            movieList.appendChild(div) 
            const reviewButton = () => document.getElementById("add-review-button")
    
            reviewButton().addEventListener("click", renderReviewForm)
        })
    }
    
}

const renderReviewForm = () => {
    {debugger}
}
