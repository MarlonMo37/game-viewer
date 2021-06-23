class Review {

    static all = []

    constructor({written_review, rating}) {
        this.written_review = written_review
        this.rating = rating
        Review.all.push(this)
    }
}