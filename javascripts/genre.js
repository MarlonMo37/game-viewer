class Genre {

    static all = []

    constructor({name, movies}) {
        this.name = name
        this.movies = movies
        Genre.all.push(this)
    }

    static findByName(name) {
        return this.all.find(function(genre) { genre.name === name})
    }

    static findById(id) {
        return this.all.find(genre => genre.id === id)
    }

    static findOrCreateBy(genre) {
        return this.findByName(genre.name) || new Genre(genre)
    }
    
}