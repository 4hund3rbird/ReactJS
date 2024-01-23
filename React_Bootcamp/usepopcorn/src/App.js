import { useEffect, useState } from "react";
import Starrating from "./Starrating";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];
const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isDetailsLoading, setDetailsLoading] = useState(false);
  const [isMoviedetails, setisMovieDetails] = useState(false);
  let search = "interstellar";

  useEffect(
    function () {
      async function fetchdetails() {
        setDetailsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=1a7f00bc&&i=${selectedId}`
        );
        const data = await res.json();
        console.log(data);
        setSelectedMovie(data);
        setDetailsLoading(false);
      }
      if (selectedId) {
        fetchdetails();
      }
    },
    [selectedId]
  );

  useEffect(
    function () {
      async function fetchmovies() {
        try {
          setisLoading(true);
          setError("");
          console.log(query);
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=1a7f00bc&&s=${query}`
          );
          if (!response.ok) {
            throw new Error("Something went wrong so please try again");
          }
          const data = await response.json();

          if (data.Response === "False") {
            throw new Error("Movies not found");
          }
          console.log(data.Search);
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
          console.log(err.message);
        } finally {
          setisLoading(false);
        }
      }

      if (query.length < 2) {
        setMovies([]);
        setError("");
        return;
      }
      fetchmovies();
    },
    [query]
  );

  const handleAddWatchedMovies = (movie) => {
    setWatched(() => {
      return [...watched, movie];
    });
  };
  return (
    <>
      <Nav query={query} setQuery={setQuery} movies={movies} />
      <Main>
        <Box>
          {isLoading && <Loader />}
          {error && <Errormessage msg={error} />}
          {!isLoading && !error && (
            <Movielist movies={movies} setSelectedId={setSelectedId} />
          )}
        </Box>
        <Box>
          {isDetailsLoading && <Loader />}
          {!isDetailsLoading && selectedId && (
            <MovieDetails
              imdbID={selectedId}
              updateId={setSelectedId}
              movie={selectedMovie}
              isLoading={isDetailsLoading}
              watched={watched}
              setWatched={setWatched}
              handleAddWatchedMovies={handleAddWatchedMovies}
            />
          )}
          {!selectedId && !isDetailsLoading && (
            <>
              <Watchedsummary watched={watched} />
              <Watchlist watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function MovieDetails({
  imdbID,
  movie,
  isoading,
  updateId,
  handleAddWatchedMovies,
}) {
  return (
    <div>
      <div className="details">
        <header>
          <button
            className="btn-back"
            onClick={() => {
              updateId();
            }}
          >
            &larr;
          </button>
          <img src={movie.Poster} alt={`poster of movie ${movie.Title}`} />
          <div className="details-overview">
            <h2>{movie.Title}</h2>
            <p>
              {movie.Released} &bull; {movie.Runtime}
            </p>
            <p>{movie.Genre}</p>
            <p>
              <span>⭐</span>
              {movie.imdbRating} Imdb rating
            </p>
          </div>
        </header>
        <section>
          <Starrating>
            <button
              className="btn-add"
              onClick={() => {
                handleAddWatchedMovies(movie);
              }}
            >
              Add to Watchlist
            </button>
          </Starrating>

          <em>{movie.Plot}</em>
          <p>Starring : {movie.Actors}</p>
          <p>Directed by : {movie.Director}</p>
        </section>
      </div>
    </div>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
function Errormessage({ msg }) {
  return <p className="loader">❌ {msg} !</p>;
}
function Loader() {
  return (
    <>
      <p className="loader">Loading...</p>
    </>
  );
}

function Nav({ query, setQuery, movies }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}

function Box({ children }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box no-scrollbar">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
}

function Movielist({ movies, setSelectedId }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <li
          key={movie.imdbID}
          onClick={() => {
            setSelectedId(movie.imdbID);
          }}
        >
          <div className="container">
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>🗓</span>
                <span>{movie.Year}</span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Watchlist({ watched }) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <li key={movie.imdbID}>
            <div className="container">
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>⭐️</span>
                  <span>{movie.imdbRating}</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>{movie.userRating}</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>{movie.runtime} min</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function Watchedsummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
