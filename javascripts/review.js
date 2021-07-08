class Review {

    static all = []

    constructor({written_review, rating, movie_id, id}) {
        this.written_review = written_review
        this.rating = rating
        this.movie_id = movie_id
        this.id = id
        Review.all.push(this)
    }

    static findById(id) {
        return this.all.find(function(review) { review.id === id})
    }

    static findOrCreateBy(review) {
        return this.findById(review.id) || new Review(review)
    }

    render() {
        let element_id = `${this.movie_id}-reviews`
        let reviewsDiv = () => document.getElementById(element_id)
        if (reviewsDiv()) {
        let movieHtml = `
            <h3>${this.written_review}</h3>
            <h3>${this.rating}/5</h3>
        `
        reviewsDiv().innerHTML += movieHtml
        }
    }

    static handleReviewsClick() {
        // {debugger}
        clearLists()
        let groups = Review.all.reduce((accumulator, review) => {     
            accumulator[review.movie_id] = [...accumulator[review.movie_id] || [], review]
            return accumulator    
        }, {})

        if (Object.keys(groups).length > 0) {
            for (let i = 0; i < Object.keys(groups).length; ++i) {
                let movie = Movie.findById(Number(Object.keys(groups)[i]))
                let div = document.createElement('div')
                {debugger}
                div.innerHTML = `
                <table id="${movie.id}">
                    <tr>
                        <th>
                            <img src="${movie.poster_url}">
                        </th>
                        <td>
                            <h2>${movie.title}</h2>
                            <h3>Release Date: ${movie.release_date}</h3>
                            <h3>Summary: ${movie.summary}</h3>
                            <h3>Audience Rating: ${movie.audience_rating}/10<h3>
                            <h3>Reviews:</h3>
                            
                            <div id="your-${movie.title}-reviews">
                            </div>
                            

                        </td>
                    </tr>  
                </table>
                `
                reviewsList.append(div)

                groups[Object.keys(groups)[i]].forEach( review =>{
                    let id = `your-${movie.title}-reviews`
                    let reviewDiv = document.createElement('div')
                    let movieReviewsDiv = document.getElementById(id)
                    {debugger}
                    reviewDiv.innerHTML = `
                        <h3>${review.written_review}</h3>
                        <h3>${review.rating}/5</h3>
                    `
                    movieReviewsDiv.append(reviewDiv)
            })}
        } else {
            let div = `
                <h2>Sorry, but you dont have any reviews right now. Go write some!!!</h2>
            `
            reviewsList.innerHTML += div
        }
            
        


        
        {debugger}
    }




}