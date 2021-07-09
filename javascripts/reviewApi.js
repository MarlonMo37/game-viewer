class ReviewApi {

    static url = `http://127.0.0.1:3000/reviews`

    static fetchReviews() {
        fetch(this.url)
        .then(resp => resp.json())
        .then(json => json.forEach( review => {
            Review.findOrCreateBy(review)
        }))
        .catch(this.handleError)
    }

    static handleSubmit(e) {
        {debugger}
        e.preventDefault()
        let form = this.parentElement
        const data = {
            "written_review": form.querySelector("textarea").value,
            "rating": ReviewApi.getRating(form),
            "movie_id": form.querySelector("input").value
        }
       
        fetch(ReviewApi.url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
            
        })
        .then(resp => resp.json())
        .then(json => {
            {debugger}
            let date = {
                written_review: json["written_review"],
                id: json["id"],
                movie_id: json["movie"].id,
                rating: json["rating"]
            }
            let review = new Review(date)
            form.reset()
            review.render()
            {debugger} 
        })        
    }

    static handleFetchUpdate(e) {
        {debugger}
    }

    // static handleUpdate(e) {
    //     // {debugger}
    //     let id = this.parentElement.querySelector("input").value
    //     let writtenReview = this.parentElement.firstElementChild.innerText
    //     let reviewRating = this.parentElement.firstElementChild.nextElementSibling.innerText.slice(0,1)

    //     let form = this.parentElement

    //     form.innerHTML = `
    //     <form id="review-form">
    //         <input type="hidden" value="${id}">
    //         <label for="movie-review">Your Review</label>
    //         <textarea>${writtenReview}</textarea><br></br>
    //         <style>
    //         .checked {
    //             color: orange;
    //         }
    //         </style>
    //         <div>
    //             <label for="movie-stars">Star Rating 1-5</label>
    //                 <div id="stars">
    //                     <span class="fa fa-star"></span>
    //                     <span class="fa fa-star"></span>
    //                     <span class="fa fa-star"></span>
    //                     <span class="fa fa-star"></span>
    //                     <span class="fa fa-star"></span>
    //                 </div>
    //         </div>
    //         <input type="submit" id="update-review-button">
    //     </form>
    //     `
    //     const all = document.querySelectorAll('.fa')
    //     all.forEach( star => {
    //         star.addEventListener('click', Movie.fillStars)
    //     })
    //     let button = form.querySelector('#update-review-button')
    //     button.addEventListener('click', )
    //     {debugger}
        
            
    //     // const data
    // }

    static getRating(div){
        let ratingStars = () => div.querySelectorAll(".fa")
        let actualRating = 0 
        for(let i = 0; i < ratingStars().length; ++i) {
            if ([...ratingStars()[i].classList].includes('checked')){
                actualRating++
            }
        }
        return actualRating   
    }



}