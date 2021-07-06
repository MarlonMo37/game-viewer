class Review {

    static all = []

    constructor({written_review, rating, movie_id}) {
        this.written_review = written_review
        this.rating = rating
        this.movie_id = movie_id
        Review.all.push(this)
    }

    static findById(id) {
        return this.all.find(function(review) { review.id === id})
    }

    static findOrCreateBy(review) {
        return this.findById(review.id) || new Review(review)
    }




}