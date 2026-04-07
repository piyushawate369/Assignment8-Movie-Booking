import { useParams, useNavigate } from "react-router-dom";
import movies from "../data";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  return (
    <div className="page details">
  <h2>{movie.name}</h2>
  <img src={movie.image} />
  <br />
  <button onClick={() => navigate("/book")}>Book Seat</button>
</div>
    
  );
}

export default MovieDetails;