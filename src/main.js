const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        "api_key":API_KEY, 
    }
});


async function getTrendingPreview() {
    const { data } = await api('trending/all/day') // Como hemos definido en api los parametros por defecto, aqui solo deberemos usar el bloque al que necesitamos llamar
    const movies = data.results;
    
    const tendencias = document.querySelector("#trendingPreview .trendingPreview-movieList")

    trendingMoviesPreviewList.innerHTML = "" // Limpiamos el contenido de la lista para que no se repitan los elementos
    movies.forEach(movie => {

        let movieContainer = document.createElement("div")
        movieContainer.classList.add("movie-container")

        let movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.src = 'https://image.tmdb.org/t/p/w300' + movie.poster_path
        movieImg.alt = movie.name
        
        movieContainer.appendChild(movieImg)
        tendencias.appendChild(movieContainer)
    });
}

async function getCategoriesPreview() {
    const {data} = await api('genre/movie/list') // Como hemos definido en api los parametros por defecto, aqui solo deberemos usar el bloque al que necesitamos llamar
    let categories = data.genres
    
    const previewCategoriesContainer  = document.querySelector("#categoriesPreview .categoriesPreview-list")
    previewCategoriesContainer.innerHTML = "" // Limpiamos el contenido de la lista para que no se repitan los elementos

    categories.forEach(category => {

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
        console.log(category);
        categoryContainer.appendChild(categoryTitle)
        categoriesPreviewList.appendChild(categoryContainer)
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

