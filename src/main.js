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
    const movies = await res.json() // Al usar la desestructuración, podemos llamar al dato que quedamos sin tener que usar .json()

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
    const URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + KEY // Me daba error pk tenia un parentesis

    const res = await fetch(URL);
        const data = await res.json()

    //const { data } = await api('') // Como hemos definido en api los parametros por defecto, aqui solo deberemos usar el bloque al que necesitamos llamar


    console.log(data);
    let categories = data.genres
    categories.forEach(category => {

        const previewCategoriesContainer  = document.querySelector("#categoriesPreview .categoriesPreview-list")

        let categoryContainer = document.createElement("div")
        categoryContainer.classList.add("category-container")

        let categoryTitle = document.createElement("h3")
        categoryTitle.classList.add("category-title")
        
        categoryTitle.id =  'id' + category.id
        categoryTitle.innerText = category.name

        
        //categoryTitle.setAttribute('id', 'id' + category.id);
        //const categoryTitleText = document.createTextNode(category.name);
        
        categoryContainer.appendChild(categoryTitle)
        previewCategoriesContainer .appendChild(categoryContainer)
    });
}


// Cuando tenga la de cargar categorias, mover al fichero de js Navigation


