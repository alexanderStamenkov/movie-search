# 🎬 Cinemix — Movie Searcher

A responsive movie search app built with vanilla JavaScript and the OMDb API.

## Screenshots

| Desktop                                                        | Mobile                                                       |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| <img src="screenshots/desktop.png" width="480" alt="Desktop"/> | <img src="screenshots/mobile.png" width="240" alt="Mobile"/> |

## Features

- 🔍 Search movies, series and games by title
- 🎭 Type badges (Movie / Series / Game)
- 📱 Fully responsive design
- ⚡ Animated card reveals

## Tech Stack

- Vanilla JavaScript (ES6+)
- OMDb API
- CSS Variables & Grid

## Setup

1. Clone the repo

```bash
   git clone https://github.com/alexanderStamenkov/movie-searcher.git
```

2. Get a free API key from [omdbapi.com](https://www.omdbapi.com/apikey.aspx)

3. Create a `config.js` file:

```js
const API_KEY = "your_api_key_here";
```

4. Open `index.html` with Live Server

## Project Structure

movie-searcher/
├── screenshots/
│ ├── desktop.png
│ └── mobile.png
├── index.html
├── styles.css
├── script.js
├── config.js # not tracked by git
├── .gitignore
└── README.md

## Live

[alexanderstamenkov.github.io/movie-searcher](https://alexanderstamenkov.github.io/movie-search)

## License

MIT
