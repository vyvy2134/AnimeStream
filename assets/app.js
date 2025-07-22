// assets/app.js
const animes = [
    {
        id: 1,
        title: "Attack on Titan",
        genre: "Action, Drama",
        rating: 9.0,
        episodes: 87,
        season: 4,
        poster: "🏛️"
    },
    {
        id: 2,
        title: "Demon Slayer",
        genre: "Action, Supernatural",
        rating: 8.7,
        episodes: 44,
        season: 3,
        poster: "⚔️"
    },
    {
        id: 3,
        title: "One Piece",
        genre: "Adventure, Comedy",
        rating: 8.9,
        episodes: 1000,
        season: 20,
        poster: "🏴‍☠️"
    },
    {
        id: 4,
        title: "Naruto",
        genre: "Action, Adventure",
        rating: 8.3,
        episodes: 720,
        season: 2,
        poster: "🍃"
    },
    {
        id: 5,
        title: "Death Note",
        genre: "Thriller, Supernatural",
        rating: 9.0,
        episodes: 37,
        season: 1,
        poster: "📓"
    },
    {
        id: 6,
        title: "My Hero Academia",
        genre: "Action, School",
        rating: 8.6,
        episodes: 138,
        season: 6,
        poster: "🦸"
    }
];

function renderAnimes(list, containerId = 'animeGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    list.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.onclick = () => {
            window.location.href = `anime.html?id=${anime.id}`;
        };
        card.innerHTML = `
            <div class="anime-poster">${anime.poster}</div>
            <div class="anime-info">
                <div class="anime-title">${anime.title}</div>
                <div class="anime-genre">${anime.genre}</div>
                <div class="anime-rating">⭐ ${anime.rating}/10</div>
                <div class="episodes-count">${anime.episodes} épisodes • Saison ${anime.season}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function getAnimeById(id) {
    return animes.find(a => a.id === parseInt(id));
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const animeCards = document.querySelectorAll(".anime-card");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      animeCards.forEach(card => {
        const title = card.querySelector(".title").textContent.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
      });
    });
  }
});
