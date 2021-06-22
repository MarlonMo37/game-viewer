class MovieApi {

    static url = `http://127.0.0.1:3000/movies`

    static fetchMovies() {
        fetch(this.url)
        .then(resp => resp.json())
        .then(json => (json.forEach))
        .catch(error => console.log(error))
    }
}