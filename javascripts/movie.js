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
                        <div id="${movie.title}-review-button">
                            <button class="add-review-button">Add Review</button>
                        </div>
    
                    </td>
                </tr>  
            </table>
            `
                
            movieList.appendChild(div) 
            // const reviewButton = () => document.getElementById("add-review-button")
    
            // reviewButton().addEventListener("click", movie.renderReviewForm)
        })
        const all = document.querySelectorAll('.add-review-button')

        all.forEach( button => {
            button.addEventListener('click', Movie.renderReviewForm)
        }
        )
       
    }
        
    
    static renderReviewForm() {
        const div = this.parentElement

        div.innerHTML = `
        <form id="review-form">
            <label for="movie-review">Your Review</label>
            <textarea></textarea><br></br>
            <style>
            .checked {
                color: orange;
            }
            </style>
            <div>
                <label for="movie-stars">Star Rating 1-5</label>
                    <div id>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
            </div>
            <input type="submit">
        </form>
        `
        const all = document.querySelectorAll('.fa')
        all.forEach( star => {
            star.addEventListener('click', Movie.fillStars)
        })
        reviewForm().addEventListener("submit", ReviewApi.handleSubmit)
    }

    static fillStars() {
        this.nextElementSibling

        const all = document.querySelectorAll('.fa')
        all.forEach(star => {
            star.classList.remove('checked')
        })

        this.classList.add('checked')
        let node = this
        do {
            let newNode = node.previousElementSibling
            newNode.classList.add('checked')
            node = newNode
        } while (node != null)


    }


    
}




