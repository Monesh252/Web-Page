# 🎬 OMDb Movie Search App

A responsive and interactive movie search web application powered by the [OMDb API](http://www.omdbapi.com/). Users can search movies by title and view details such as posters and release years.

---

## 📌 Overview

This app allows users to:
- Search for movies by entering a title.
- View movie posters, titles, and release years.
- See placeholder images if a movie poster is unavailable.
  
---

## 🔗 Why OMDb API?

We chose the **OMDb API** because:
- It is a free and public API specifically designed for retrieving movie information.
- It offers:
  - A **Search endpoint** for broad title-based lookups.
  - A **Detail endpoint** for getting complete movie data.
- The API is lightweight, easy to use, and does not require authentication headers—only an API key.

Used Endpoints:
- **Search Endpoint**  
  `https://www.omdbapi.com/?s={SEARCH_TERM}&apikey={YOUR_API_KEY}`  
  Used to retrieve a list of movies based on user input.

- **Detail Endpoint**  
  `https://www.omdbapi.com/?i={IMDB_ID}&apikey={YOUR_API_KEY}`  
  Useful for loading more detailed info about a specific movie when selected.

## 📌 Challenges

- Felt challenges in api integration to fetch data
- Some style attributes like movie card hover I felt difficulties

---




