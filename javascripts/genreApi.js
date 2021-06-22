class GenreApi {
    static url = `http://127.0.0.1:3000/genres`

    static fetchGenres() {
        fetch(this.url)
        .then(resp => resp.json())
        .then (json => 
            json.forEach(genre => {
            Genre.findOrCreateBy(genre)
        }))
        .catch(this.handleError)
    }
}