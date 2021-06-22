class Genre {

    static all = []

    constructor(name) {
        this.name = name
        Genre.all.push(this)
    }
    
}