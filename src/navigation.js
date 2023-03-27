window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
// Apuntar para que servia el 3r argumento

function navigaror () {
    console.log ({ location });

    if (location.hash.startsWith('#trends')) {
        console.log("TRENDS")
    } else if (locarion.hash.startsWith('#search=')){
        console.log('Search');
    } else if (locarion.hash.startsWith('#movie=123')){
        console.log('Movie!!');
    } else if (locarion.hash.startsWith('#category=')){
        console.log('Categories');
    } else {
        console.log("Home");
    }

    location.hash
}