class Genre {

    static all = []

    constructor({name, movies}) {
        this.name = name
        this.movies = movies
        Genre.all.push(this)
    }

    static findByName(name) {
        return this.all.find(function(genre) { genre.name === name})
    }

    static findById(id) {
        return this.all.find(genre => genre.id === id)
    }

    static findOrCreateBy(genre) {
        return this.findByName(genre.name) || new Genre(genre)
    }

    static handleGenresClick() {
        movieList.innerText = ""
        clearLists()
    
        if (!genreList.hasChildNodes() || !document.getElementById("genre-header")) {
            genreList.innerText = ""
    
            Genre.all.forEach( genre => {
                const div = document.createElement("div")
                div.id = `${genre.name}-info`
    
                div.innerHTML = `<h2 id="genre-header">${genre.name}</h2>`
    
                div.addEventListener("click", genre.renderMovies)
    
                genreList.appendChild(div)
            })
        } 
    }
    
    renderMovies = (e) => {
        genreList.innerText = ""
        genreList.innerHTML = `
            <h2 id="${this.name}-genre">${this.name}</h2>
            <button id="return-genres">Go Back to Genres</button>
        `
        let returnButton = () => document.getElementById("return-genres")
        returnButton().addEventListener("click", Genre.handleGenresClick)

        this.movies.forEach( movie => {
            const movieDiv = document.createElement("div")
            let actualMovie = () => Movie.findById(movie.id)
          
            movieDiv.innerHTML = `${actualMovie().movieInfo().innerHTML}`
            genreList.appendChild(movieDiv)

            let movieId = `${movie.title}-review-button`
            let reviewId = `${movie.title}-reviews-button`
            let theButton = () => document.getElementById(movieId).children[0]
            let reviewsButton = () => document.getElementById(reviewId).children[0]
            
            
            theButton().addEventListener('click', function(){actualMovie().renderReviewForm(movie)})
            reviewsButton().addEventListener('click', function(){actualMovie().getReviews()})

            // {debugger}
        })
    }
}

