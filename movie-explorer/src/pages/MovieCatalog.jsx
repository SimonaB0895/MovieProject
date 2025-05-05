import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieCatalog() {
  const [movies, setMovies] = useState([]);
  //const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("batman"); // По подразбиране


  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
   // fetch("http://www.omdbapi.com/?s=batman&apikey=REACT_APP_OMDB_API_KEY")
   fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`)
  //     .then(res => res.json())
  //     .then(data => setMovies(data.Search || []));
  // }, []);
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
    <div>
      <h2>Каталог с филми</h2>
      <input
        type="text"
        placeholder="Търси филм..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img src={movie.Poster} alt={movie.Title} style={{ width: "100%" }} />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCatalog;