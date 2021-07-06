class ReviewApi {

    static url = `http://127.0.0.1:3000/reviews`

    static fetchReviews() {
        fetch(this.url)
        .then(resp => resp.json)
        .then(json => json.forEach( review => {
            Review.findOrCreateBy(review)
        }))
        .catch(this.handleError)
    }

    static handleSubmit(e) {
        {debugger}
        e.preventDefault()
        const date = {
            "written_review": this.querySelector("textarea").value,
            "rating": ReviewApi.getRating(this)
        }
    }

    static getRating(div){
        let ratingStars = () => div.querySelectorAll(".fa")
        let actualRating = 0 
        for(let i = 0; i < ratingStars().length; ++i) {
            {debugger}
            if ([...ratingStars()[i].classList].includes('checked')){
                actualRating++
            }
        }
        return actualRating   
    }

}