//async function fetchData(){
//    console.log(KEY);
//    const prueba = "https://api.themoviedb.org/3/trending/all/day?api_key=" + KEY
//    const res = await fetch(prueba);
//    const data = await res.json()

//    console.log(data);
//}


//const api = axios.create({
//    baseURL: "https://api.themoviedb.org/3/",
//    headers: {
//        'Content-Type': 'application/json;charset=utf-8'
//    },
//    params: {
//        "api_key":API_KEY, 
//    }
//});

async function getTrendingPreview() {
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

async function getCategoriesPreview() {
    const URL = "https://api.themoviedb.org/3/genre/movie/list/?api_key=" + KEY
    const res = await fetch(URL);
    const data = await res.json()


    let categories = data.genres
    categories.forEach(category => {

        const tendencias = document.querySelector("#categoriesPreview .categoriesPreview-List")
        let categoryContainer = document.createElement("div")
        categoryContainer.classList.add("category-container")

        let categoryTitle = document.createElement("img");
        img.classList.add("movie-img");
        img.src = 'https://image.tmdb.org/t/p/w300' + element.poster_path
        img.alt = element.name
        
        movieContainer.appendChild(img)
        tendencias.appendChild(movieContainer)
    });
}


// Cuando tenga la de cargar categorias, mover al fichero de js Navigation
getTrendingPreview();
getCategoriesPreview();


