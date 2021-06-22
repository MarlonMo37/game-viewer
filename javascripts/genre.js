class Genre {

    static all = []

    constructor(name) {
        this.name = name
        Genre.all.push(this)
    }

    static findByName(name) {
        return this.all.find(function(genre) { genre.name === name})
    }

    static findById(id) {
        return this.all.find(genre => genre.id === id)
    }

    static findOrCreateBy(movie) {
        return this.findByName(movie.name) || new Genre(genre)
    }
    
}