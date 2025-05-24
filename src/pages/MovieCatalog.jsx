import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MovieCatalog.css";


function MovieCatalog() {
  const [movies, setMovies] = useState([]);
  //const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("Star Wars"); // По подразбиране


  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
   fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
  .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, [searchTerm]);

  const filtered = movies.filter(m =>
    m.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
     <div className="movie-catalog">
    <h2>Search for any movie</h2>
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Търси филм..."
    />
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"} alt={movie.Title} />
          <h4>{movie.Title}</h4>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default MovieCatalog;