const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        "api_key":API_KEY, 
    }
});


// Utils
function createMovies(movies, container) {
    container.innerHTML = '' 

    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.alt = movie.title
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
    });
}
function createCategories(categories,container){
    categories.forEach(category => {

        let categoryContainer = document.createElement("div")
        categoryContainer.classList.add("category-container")

        let categoryTitle = document.createElement("h3")
        categoryTitle.classList.add("category-title")
        
        categoryTitle.id =  'id' + category.id
        categoryTitle.innerText = category.name

        categoryTitle.addEventListener('click', () => { // Para cuando hagamos click, nos lleve a la categoria
            location.hash = `#category=${category.id}-${category.name}`
        })

        categoryContainer.appendChild(categoryTitle)
        container.appendChild(categoryContainer)
    });
}

// Llamados a la API
async function getTrendingMoviesPreview() {
    const { data } = await api('trending/all/day') // Como hemos definido en api los parametros por defecto, aqui solo deberemos usar el bloque al que necesitamos llamar
    const movies = data.results;
    
    trendingMoviesPreviewList.innerHTML = "" // Limpiamos el contenido de la lista para que no se repitan los elementos
    createMovies(movies,trendingMoviesPreviewList)
    
}

async function getCategoriesPreview() {
    const {data} = await api('genre/movie/list') // Como hemos definido en api los parametros por defecto, aqui solo deberemos usar el bloque al que necesitamos llamar
    let categories = data.genres
    
    categoriesPreviewList.innerHTML = "" // Limpiamos el contenido de la lista para que no se repitan los elementos
    createCategories(categories, categoriesPreviewList)
}

// Cuando seleccionemos una categoria, llamaremos a esta funcion para cargar sus películas correspondientes
async function getMoviesByCategory(categoryId) {
    const { data } = await api('/discover/movie', {
        params: {
            with_genres: categoryId,
    }})
    const movies = data.results;
    genericSection.innerHTML = "";

    createMovies(movies,genericSection)
}

async function getMoviesBySearch(query){
    const { data } = await api('/search/movie', {
        params: {
            query,
    }})
    const movies = data.results;
    genericSection.innerHTML = "";

    createMovies(movies,genericSection)
}

async function getTrendingMovies() {
    const { data } = await api('trending/all/day') // Como hemos definido en api los parametros por defecto, aqui solo deberemos usar el bloque al que necesitamos llamar
    const movies = data.results;
    
    trendingMoviesPreviewList.innerHTML = "" // Limpiamos el contenido de la lista para que no se repitan los elementos
    createMovies(movies,genericSection)
    
}
