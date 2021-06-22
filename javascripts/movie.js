class Movie {

    static all = []

    constructor(audience_rating, genres, poster_url, release_date, reviews, summary, title) {
        this.audience_rating = audience_rating
        this.genres = genres
        this.poster_url = poster_url
        this.release_date = release_date
        this.reviews = reviews
        this.summary = summary
        this.title = title
        Movie.all.push(this)
    }

    
}