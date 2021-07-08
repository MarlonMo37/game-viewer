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
        {debugger}
        clearLists()
    }




}