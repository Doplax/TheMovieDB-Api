window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator);
// Apuntar para que servia el 3r argumento

function navigator () {
    console.log ({ location });

    if (location.hash.startsWith('#trends')) {
        trendsPage()

    } else if (location.hash.startsWith('#search=')){
        searchPage()

    } else if (location.hash.startsWith('#movie=123')){
        moviePage()

    } else if (location.hash.startsWith('#category=')){
        categoriesPage()

    } else {
        homePage()   
    }

    location.hash
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

    getTrendingPreview();
    getCategoriesPreview();

}

function trendsPage() {
    console.log('TRENDS!!');
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


}

function moviePage() {
    console.log("Movie");
}

function searchPage() {
    console.log("Search");
}

