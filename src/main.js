//async function fetchData(){
//    console.log(KEY);
//    const prueba = "https://api.themoviedb.org/3/trending/all/day?api_key=" + KEY
//    const res = await fetch(prueba);
//    const data = await res.json()

//    console.log(data);
//}

async function cargarTendencias() {
    const URL = "https://api.themoviedb.org/3/trending/all/day?api_key=" + KEY
    const res = await fetch(URL);
    const movies = await res.json()

    const tendencias = document.querySelector("#trendingPreview .trendingPreview-movieList")

    let array_moviesmovies = movies.results
    array_moviesmovies.forEach(element => {

        let movieContainer = document.createElement("div")
        movieContainer.classList.add("movie-container")

        let img = document.createElement("img");
        img.classList.add("movie-img");
        img.src = 'https://image.tmdb.org/t/p/w300' + element.poster_path
        img.alt = element.name
        
        movieContainer.appendChild(img)
        tendencias.appendChild(movieContainer)
    });
}

cargarTendencias()
console.log(API_KEY);

