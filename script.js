const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("results");
const messageEl = document.getElementById("message");

// Функция за показване на съобщение
function showMessage(text, isLoading = false) {
  messageEl.textContent = text;
  messageEl.className = "message" + (isLoading ? "loading" : "");
  resultsContainer.innerHTML = "";
}

const searchMovies = async function () {
  const query = searchInput.value.trim();

  if (!query) {
    showMessage("Моля, въведи име на файла!");
    return;
  }

  showMessage("Зареждане...", true);
  try {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`,
    );
    const data = await res.json();

    if (data.Response === "False") {
      showMessage(data.Error || "Няма намерени филми 😔");
      return;
    }

    displayMovies(data.Search);
  } catch (err) {
    showMessage(
      "Грешка при свързване с сървъра. Провери интернет връзката си.",
    );
    console.error(err);
  }
};

// Функция за показване на резултатите
const displayMovies = function (movies) {
  resultsContainer.innerHTML = "";
  messageEl.textContent = "";

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const poster =
      movie.Poster !== "N/A"
        ? movie.Poster
        : "https://placehold.co/300x450/18181d/3d3d4d?text=No+Poster";

    const typeClass =
      movie.Type === "movie"
        ? "movie"
        : movie.Type === "series"
          ? "series"
          : "game";

    card.innerHTML = `
      <div class="movie-poster">
        <img src="${poster}" alt="${movie.Title}" loading="lazy">
        <span class="movie-type-badge ${typeClass}">${movie.Type}</span>
      </div>
      <div class="movie-info">
        <div class="movie-title">${movie.Title}</div>
        <div class="movie-year">${movie.Year}</div>
      </div>
    `;
    resultsContainer.appendChild(card);
  });
};

// Event listeners
searchBtn.addEventListener("click", searchMovies);

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchMovies();
  }
});
