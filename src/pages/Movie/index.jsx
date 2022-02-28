import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./movie.css";

export default function Movie() {
  const { id } = useParams();
  const history = useHistory();
  const [movie, setMovie] = useState([]);
  const [finishedTimeout, setFinishedTimeout] = useState(false);
  const [isbutton, setButton] = useState(true);

  useEffect(() => {
    async function loadingMovies() {
      const response = await api.get(`/films/${id}`);

      setMovie(response.data);
       
     
    }
    loadingMovies();
  }, [history, id]);


  useEffect(() => {
    if (isbutton) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, []);


useEffect(() => {
    const id = setTimeout(() => {
      setFinishedTimeout(true);
    }, 2000);

    return () => clearTimeout(id);
  }, [id]);




  function saveMovie() {

    const myList = localStorage.getItem('movies');

    let moviesSave = JSON.parse(myList) || [];

    const hasFilme = moviesSave.some((mSave) => mSave.id === movie.id)

    if (hasFilme) {
      toast.error('🦄  Filme já salvo ');
      return;

    }

    moviesSave.push(movie);
    localStorage.setItem('movies', JSON.stringify(moviesSave));
    toast.success('🦄 Projeto salvo com sucesso ')

  }


  if (!finishedTimeout) {
    return (
      <div className="component_movie loading-movie">
       <img src="https://media.giphy.com/media/XHTITSLlguu26nvczg/giphy.gif" width={300}  alt="" />
      </div>
    );
  }
  return (

    <>

      <div className="component_movie">

        <div className=" container_movie">
          <div className="movies-primary-information">
            <div>
              <h1>{movie.original_title}</h1>
            </div>
            <img
              className="image_primary"
              src={movie.image}
              alt={movie.original_title}
            />
          </div>
          <div className="movies-primary-information-1">
            <h1 className="title_movies">{movie.title} <a className="save_movies" onClick={saveMovie}>❤️ </a></h1>
            
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
    </>
  );
}
