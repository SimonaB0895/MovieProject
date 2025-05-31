import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MovieCatalog.css";


function MovieCatalog() {
  const [movies, setMovies] = useState([]);
  //const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("Star Wars"); // По подразбиране

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [likedMovies, setLikedMovies] = useState(() => {
    // Зареждаме харесаните филми от localStorage (ако има)//////////////////////////////////////
    const saved = localStorage.getItem("likedMovies");
    return saved ? JSON.parse(saved) : {};
  });

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


const fetchMovieDetails = async (id) => {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
  const data = await res.json();
  setSelectedMovie(data);
  setShowModal(true);
};

const toggleLike = (imdbID) => {
    setLikedMovies((prev) => {
      const newLikes = { ...prev };
      if (newLikes[imdbID]) {
        delete newLikes[imdbID];
      } else {
        newLikes[imdbID] = true;
      }
      localStorage.setItem("likedMovies", JSON.stringify(newLikes));
      return newLikes;
    });
  };/////////////////////////////////////////

  return (
      <div className="movie-catalog">
      <h2>Search for any movie</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
      />
      <div className="movies-grid">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="movie-card"
            onClick={() => fetchMovieDetails(movie.imdbID)}
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
              alt={movie.Title}
            />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
            <button
              className="like-btn"
              onClick={() => toggleLike(movie.imdbID)}
              title={likedMovies[movie.imdbID] ? "Отхаресване" : "Харесване"}
              style={{
                position: "absolute",
                bottom: "8px",
                right: "8px",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <img
                src={likedMovies[movie.imdbID] ? "/heart1.png" : "/heart2.png"}
                alt={likedMovies[movie.imdbID] ? "Liked" : "Not liked"}
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Модал с детайли за филм */}
      {showModal && selectedMovie && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedMovie.Title} ({selectedMovie.Year})</h2>
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
            <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
            <p><strong>Director:</strong> {selectedMovie.Director}</p>
            <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
            <p><strong>Summary:</strong> {selectedMovie.Plot}</p>
            <p><strong>Rating:</strong> {selectedMovie.imdbRating}/10</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  

  );
}


export default MovieCatalog;