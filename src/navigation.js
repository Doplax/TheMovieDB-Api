searchFormBtn.addEventListener('click', () => {
    
    location.hash = '#search=' + searchFormInput.value;
})

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends=';
})

arrowBtn.addEventListener('click', () => {
    history.back()
    //location.hash = '#home';
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator () {
    if (location.hash.startsWith('#trends')) {
        trendsPage()

    } else if (location.hash.startsWith('#search=')){
        searchPage()

    } else if (location.hash.startsWith('#movie=123')){
        moviePage()

    } else if (location.hash.startsWith('#category')){
        categoriesPage()

    } else {
        homePage()   
    }

    //Para ir al Top despues de navegar entre las secciones
    document.scrollTop = 0;
    document.documentElement.scrollTop = 0;// Para los distintos navegadores

}


function homePage() {
    console.log("Home");

    headerSection.classList.remove('header-container--long')     // Para prevenir que carge la clase header-container--long en la home
    headerSection.style.backgroundImage = '';
    arrowBtn.classList.add('inactive'); // Para que no se vea el boton de atras en la home
    headerTitle.classList.add('inactive'); // Para que no se vea el titulo de la home
    headerCategoryTitle.classList.add('inactive'); // Para que no se vea el titulo de la categoria en la home
    searchForm.classList.remove('inactive'); // Para que se vea el buscador en la home

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive'); // Para que se vea la seccion de categorias en la home
    genericSection.classList.add('inactive'); // Para que no se vea la seccion de genericList en la home
    movieDetailSection.classList.add('inactive'); // Para que no se vea la seccion de movieDetail en la home

    getTrendingMoviesPreview();
    getCategoriesPreview();

}

function categoriesPage() {
    headerSection.classList.remove('header-container--long')     // Para prevenir que carge la clase header-container--long en la home
    headerSection.style.backgroundImage = '';
    arrowBtn.classList.remove('inactive'); // 
    headerTitle.classList.add('inactive'); // Para que no se vea el titulo de la home
    headerCategoryTitle.classList.remove('inactive'); // Para que no se vea el titulo de la categoria en la home
    searchForm.classList.add('inactive'); // Para que se vea el buscador en la home

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive'); // Para que se vea la seccion de categorias en la home
    genericSection.classList.remove('inactive'); // Para que no se vea la seccion de genericList en la home
    movieDetailSection.classList.add('inactive'); // Para que no se vea la seccion de movieDetail en la home


    // Para separar el id de la categoria y el nombre de la categoria
    const [_,categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');

    headerCategoryTitle.innerText = categoryName; // Mover a main?

    
    getMoviesByCategory(categoryId);

}

function movieDetailsPage() {
    console.log("Movie");
    headerSection.classList.add('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

}

function searchPage() {
    console.log("Search");
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_,query] = location.hash.split('=');
    getMoviesBySearch(query);

}

function trendsPage() {
    console.log('TRENDS!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerText = "Tendencias";
    getTrendingMovies();
}






/////////////
