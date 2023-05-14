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
        movieContainer.addEventListener("click",() => {
            location.hash = "#movie=" + movie.id 
        })

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.alt = movie.title
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path

        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);


    });
}
function createCategories(categories,container){
    container.innerHTML = ''
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


async function getMovieById(id){
    const { data: movie } = await api('movie/' + id);

    const movieImgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    // Como la imágen la cargamos desde el css:
    headerSection.style.background = `
    linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.35) 19.27%,
        rgba(0, 0, 0, 0) 29.17%
    ),
    url(${movieImgUrl})`

    
    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;

    
    createCategories(movie.genres, movieDetailCategoriesList)
    getRelatedMoviesId(id)
}   


async function getRelatedMoviesId(id) {
    const { data } = await api(`movie/${id}/recommendations`);
    console.log(data);
    const realtedMovies = data.results;

    createMovies(realtedMovies, relatedMoviesContainer)
}