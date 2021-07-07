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
           
        
           

            movieDiv.innerHTML =`
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
            genreList.appendChild(movieDiv)
        })
    }
}

