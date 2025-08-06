const API_KEY = 'bcd072ad'; // Replace with your actual OMDb API key
const searchBtn = document.getElementById('searchBtn');
const queryInput = document.getElementById('query');
const moviesDiv = document.getElementById('movies');

searchBtn.addEventListener('click', () => {
  const query = queryInput.value.trim();
  if (query) {
    fetchMovies(query);
  } else {
    alert("Please enter a movie title.");
  }
});

/**
 * Fetch movies from OMDb API by search term
 */
async function fetchMovies(query) {
  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === "True") {
      renderMovies(data.Search);
    } else {
      moviesDiv.innerHTML = `<p>No results found.</p>`;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    moviesDiv.innerHTML = `<p>Error fetching data.</p>`;
  }
}

/**
 * Render movies into the DOM
 */
function renderMovies(movies) {
  moviesDiv.innerHTML = "";

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = "movie-card";

    const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/250x370?text=No+Image";

    card.innerHTML = `
      <img src="${poster}" alt="${movie.Title}" class="movie-poster">
      <div class="movie-title">${movie.Title}</div>
      <div class="movie-year">${movie.Year}</div>
    `;

    moviesDiv.appendChild(card);
  });
}
