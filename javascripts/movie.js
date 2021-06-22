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

    static findByName(name) {
        return this.all.find(function(movie) { movie.name === name})
    }

    static findById(id) {
        return this.all.find(movie => movie.id === id)
    }

    static findOrCreateBy(movie) {
        return this.findByName(movie.name) || new Movie(movie)
    }

    
}