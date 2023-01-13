const watchlistMovies = document.getElementById("watchlist-movies");
const removeBtn = document.getElementById("remove-from-watchlist");

const savedList = JSON.parse(localStorage.getItem("watchlist"))

console.log(savedList)

window.onload = function renderWatchlist() {
    savedList.map(async (movieId) => {
        // watchlistMovies.innerHTML = savedMovie
        const res = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=e2ff993f`)
        const movie = await res.json()

        return watchlistMovies.innerHTML += `
        <figure class="movie">
            <div class="movie__hero">
                <img src=${movie.Poster} alt=${movie.Title} class="movie__img">
            </div>
            <div class="movie__content">
                <div class="movie__title">
                    <h1 class="heading__primary">${movie.Title}<i class="fas fa-fire"></i></h1>
                    <button onclick="removeFromWatchlist(${savedList.indexOf(movieId)})" id="remove-from-watchlist" class="remove-watchlist-btn">Remove from watchlist</button>
                </div>
                <div class="movie__details">
                    <p>${movie.Runtime}</p>
                    <p>${movie.Genre}</p>
                </div>
                
                <p class="movie__description">
                    ${movie.Plot}
                </p>
            </div>
        </figure>
        `


    })
}

function removeFromWatchlist(index) {
    console.log(index);
    savedList.splice(index, 1)
    console.log(savedList)
    localStorage.setItem('watchlist', JSON.stringify(savedList));
}

