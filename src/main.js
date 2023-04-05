//async function fetchData(){
//    console.log(KEY);
//    const prueba = "https://api.themoviedb.org/3/trending/all/day?api_key=" + KEY
//    const res = await fetch(prueba);
//    const data = await res.json()

//    console.log(data);
//}




const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        "api_key":KEY, 
    }
});



async function getTrendingPreview() {

    //const URL = "https://api.themoviedb.org/3/trending/all/day?api_key=" + KEY 
    //const res = await fetch(URL);
    //const movies = await res.json() // Al usar la desestructuración, podemos llamar al dato que quedamos sin tener que usar .json()

    const { data } = await api('trending/all/day') // Como hemos definido en api los parametros por defecto, aqui solo deberemos usar el bloque al que necesitamos llamar
    const movies = data.results;
    
    //const tendencias = document.querySelector("#trendingPreview .trendingPreview-movieList")

    trendingMoviesPreviewList.innerHTML = "" // Limpiamos el contenido de la lista para que no se repitan los elementos
    movies.forEach(movie => {

        let movieContainer = document.createElement("div")
        movieContainer.classList.add("movie-container")

        let movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + element.poster_path
        movieImg.alt = movie.name
        
        movieContainer.appendChild(img)
        tendencias.appendChild(movieContainer)
    });
}

async function getCategoriesPreview() {
    //const URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + KEY // Me daba error pk tenia un parentesis
    //const res = await fetch(URL);
    //const data = await res.json()

    const {data} = await api('genre/movie/list') // Como hemos definido en api los parametros por defecto, aqui solo deberemos usar el bloque al que necesitamos llamar
    let categories = data.genres
    
    categories.forEach(category => {

        //const previewCategoriesContainer  = document.querySelector("#categoriesPreview .categoriesPreview-list")
        
        categoriesPreviewList.innerHTML = "" // Limpiamos el contenido de la lista para que no se repitan los elementos


        let categoryContainer = document.createElement("div")
        categoryContainer.classList.add("category-container")

        let categoryTitle = document.createElement("h3")
        categoryTitle.classList.add("category-title")
        
        categoryTitle.id =  'id' + category.id
        categoryTitle.innerText = category.name

        categoryTitle.addEventListener('click', () => {
            location.hash = `${category.id}-${category.name}`
        })

        
        //categoryTitle.setAttribute('id', 'id' + category.id);
        //const categoryTitleText = document.createTextNode(category.name);
        
        categoryContainer.appendChild(categoryTitle)
        categoriesPreviewList .appendChild(categoryContainer)
    });
}


// Cuando tenga la de cargar categorias, mover al fichero de js Navigation


async function getMoviesByCategory(categoryId) {
    const { data } = await api('/discover/movie', {
        params: {
            with_genres: categoryId,
    }})
    const movies = data.results;

    genericSection.innerHTML = "";

    movies.forEach(movie => {

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.alt = movie.title
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path

        movieContainer.appendChild(movieImg);
        genericSection.appendChild(movieContainer);
    });
}
