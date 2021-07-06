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

    static findByName(title) {
        return this.all.find(function(movie) { movie.title === title})
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
            movie.movieInfo()
        })
        const all = document.querySelectorAll('.add-review-button')

        all.forEach( button => {
            button.addEventListener('click', Movie.renderReviewForm)
        }
        )
       
    }

    movieInfo() {
        const div = document.createElement("div")
            
        div.innerHTML = `
        <table>
            <tr>
                <th>
                    <img src="${this.poster_url}">
                </th>
                <td>
                    <h2>${this.title}</h2>
                    <h3>Release Date: ${this.release_date}</h3>
                    <h3>Summary: ${this.summary}</h3>
                    <h3>Audience Rating: ${this.audience_rating}/10<h3>
                    <div id="${this.title}-review-button">
                        <button class="add-review-button">Add Review</button>
                    </div>

                </td>
            </tr>  
        </table>
        `
        // {debugger}
        // let a = div.getElementsByClassName("add-review-button")

        movieList.appendChild(div) 
    }
        
    
    static renderReviewForm() {
        // let form = document.getElementById("review-form")
        // {debugger}
        // if (form != null) {
        //     form.remove()
        //     movieList.innerHTML = ""
        //     Movie.handleMovieClick()
        //     {debugger}
        // }
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
                    <div id="stars">
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
        let reviewForm = () => document.getElementById("review-form")

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




