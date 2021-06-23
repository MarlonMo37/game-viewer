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

}