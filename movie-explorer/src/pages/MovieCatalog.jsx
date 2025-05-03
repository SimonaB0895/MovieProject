import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MovieDetails() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://www.omdbapi.com/?s=batman&apikey=REACT_APP_OMDB_API_KEY")
      .then(res => res.json())
      .then(data => setMovies(data.Search || []));
  }, []);

  const filtered = movies.filter(m =>
    m.Title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Movie Catalog</h2>
      <input
        type="text"
        placeholder="Търси филм..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div>
        {filtered.map(movie => (
          <div key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <h3>{movie.Title} ({movie.Year})</h3>
              <img src={movie.Poster} alt={movie.Title} width="100" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;