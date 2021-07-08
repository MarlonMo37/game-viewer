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
        {debugger}
        fetch(ReviewApi.url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
            
        })
        .then(resp => resp.json())
        .then(json => {
            let review = new Review(json)
        })   
        this
    }

    // static handle

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