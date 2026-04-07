import movies from "../data";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* Navbar */}
      <div className="navbar">
        <h1 className="logo">MyFlix</h1>
        <div className="nav-links">
          <span>Home</span>
          <span>Movies</span>
          <span>My List</span>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <h2>Unlimited movies, TV shows and more</h2>
        <p>Watch anywhere. Cancel anytime.</p>
      </div>

      {/* Movies Section */}
      <h2 className="section-title">Trending Now</h2>

      <div className="movie-row">
        {movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img src={movie.image} alt={movie.name} />
            <p>{movie.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;