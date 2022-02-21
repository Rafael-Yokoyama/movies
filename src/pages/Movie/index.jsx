import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import "./movie.css";

export default function Movie() {
  const { id } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isbutton, setButton] = useState(true);

  useEffect(() => {
    async function loadingMovies() {
      const response = await api.get(`/films/${id}`);

      if (response.data.length === 0) {
        history.replace("/");
        alert("erro");
      }
      setMovie(response.data);
      setLoading(false);
    }
    loadingMovies();
  }, [history, id]);

  useEffect(() => {
    if (isbutton) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [isbutton]);

  if (loading) {
    return (
      <div className="component_movie">
        <p> carregandpo - </p>
      </div>
    );
  }
  return (
    <div className="component_movie">
      <div className=" container_movie">
        <div>
          <div>
            <h1>{movie.original_title}</h1> <a className="save_movies">❤️ </a>
          </div>
          <img
            className="image_primary"
            src={movie.image}
            alt={movie.original_title}
          />
        </div>
        <div>
          <h1 className="title_movies">{movie.title}</h1>
          <p> {movie.description}</p>
          <p className="creators">
            <span>
              <a
                href={`https://pt.wikipedia.org/wiki/${movie.director} `}
                target="_blank"
                rel="noopener noreferrer"
              >
                Director: {movie.director} 🤞
              </a>
            </span>
            <span>
              <a
                href={`https://pt.wikipedia.org/wiki/${movie.producer} `}
                target="_blank"
                rel="noopener noreferrer"
              >
                Producer: {movie.producer} 🤔
              </a>
            </span>
          </p>
          <p className="creators create_numbers">
            <span>release date: {movie.release_date}</span>
            <span>running time: {movie.running_time}</span>
            <span>score:{movie.rt_score}</span>
          </p>
          <a
            className="btn2"
            href={`http://youtube.com/results?search_query=${movie.original_title} Trailer`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Trailer
          </a>
          <img
            className="image_secondary image_movie_secondary"
            src={movie.movie_banner}
            alt={movie.original_title}
          />
          <img
            className="image_primary image_movie_primary"
            src={movie.image}
            alt={movie.original_title}
          />
          <div className="links_movies "></div>
        </div>
      </div>
    </div>
  );
}
