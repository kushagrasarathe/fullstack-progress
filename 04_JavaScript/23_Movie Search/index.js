const userInput = document.getElementById("user-input");
const search = document.getElementById("search");
const movies = document.getElementById("movies");

const watchList = []

async function searchMovie() {
    const res = await fetch(
        `http://www.omdbapi.com/?t=${userInput.value}&apikey=e2ff993f`,
        { method: "GET" }
    );
    const movie = await res.json();
    let movieCard
    if (movie.Error === "Movie not found!") {
        movieCard = `
            <h2>Unable to find what you're looking for. Please try another search.</h2>
        `
    movies.innerHTML = movieCard
    userInput.value = ""

    } else {
        movieCard = `
        <figure class="movie">
            <div class="movie__hero">
                <img src=${movie.Poster} alt=${movie.Title} class="movie__img">
            </div>
            <div class="movie__content">
                <div class="movie__title">
                    <h1 class="heading__primary">${movie.Title}<i class="fas fa-fire"></i></h1>
                    <button id="add-to-watchlist" class="watchlist-btn">Add to Watchlist</button>
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
    movies.innerHTML = movieCard
}
userInput.value = ""

// add to watchlist
const addToWatchlist = document.getElementById("add-to-watchlist");

function createWatchList() {
    watchList.push(movie.imdbID)
    console.log(watchList)
    localStorage.setItem("watchlist", JSON.stringify(watchList));
    
}

addToWatchlist.addEventListener("click", createWatchList)

return movieCard

}

search.addEventListener("click", searchMovie);



// Build a weather app that displays the current weather and forecast for a specific location using an API such as OpenWeather or Dark Sky.

// Create a movie or book recommendation system that uses an API such as The Movie Database (TMDb) or Goodreads to retrieve information and make suggestions.

// Develop a stock market tracker that pulls data from an API such as Alpha Vantage or IEX Cloud to display real-time stock prices and historical data.

// Create a social media app that integrates with an API such as Facebook or Twitter to allow users to post updates and view their feed.

// Build a travel app that uses an API such as Skyscanner or Kayak to search for flights, hotels, and rental cars and display the results to the user.

// Create a News App that uses an API such as NewsAPI or New York Times API to fetch the recent news and display on the app.

// Create a Currency Converter app that uses an API such as Open Exchange Rates or Currency Layer to convert one currency to another in real-time.
