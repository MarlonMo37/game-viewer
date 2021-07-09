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
        e.preventDefault()
        let form = this.parentElement
        const data = {
            written_review: this.parentElement.querySelector("textarea").value,
            rating: ReviewApi.getRating(form),
            id: form.querySelector('input').value
        }

        fetch(`${ReviewApi.url}/${data.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            {debugger}
            let review = Review.findById(json.id)
            {debugger}
            let updateReview = review.update(json)
            {debugger}
            updateReview.replaceReview(form)
        })
        {debugger}
    }

    static handleFetchDelete(e) {
        {debugger}
        fetch(`${ReviewApi.url}/${this.parentElement.querySelector("input").value}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => {
            this.parentElement.remove()
        })
        // {debugger}
    }

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