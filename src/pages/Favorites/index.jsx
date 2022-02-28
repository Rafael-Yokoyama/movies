
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoriites.css'
import { toast } from 'react-toastify';
import { BsTrash2Fill } from "react-icons/bs";

export default function Favorites() {
  const [allmovies, setAllMovies] = useState([]);
  const [showMovie, setMovie] = useState(false);

  const toggle = () => {
    setMovie(!showMovie);
  };

  useEffect(() => {

    const myList = localStorage.getItem('movies');
    setAllMovies(JSON.parse(myList) || []);

  }, []);

  function handleDelete(id) {
    let filterMovies = allmovies.filter((item) => {
      return (item.id !== id)
    })

    setAllMovies(filterMovies);
    localStorage.setItem('movies', JSON.stringify(filterMovies))
    toast.success('Filme excluido com sucesso!');

  }

  return (
    <div id="my-movies">
      <h1 onClick={toggle} className='movies-toggle'>Meus Filmes</h1>
   
      {showMovie && (
        <ul>
          {allmovies.length === 0 &&
            <div>
            
              <h1 className='not-movie'>Você não possui nenhum filme salvo  </h1>
              <img src="https://media.giphy.com/media/dNO7D7LoGbYbPiKsPo/giphy.gif" height={280} alt="" />
            </div>
          }
          {allmovies.map((item) => {
            return (
              <li key={item.id}>
                <div className='title-favorites'>
                  <h1>{item.original_title}</h1>
                </div>

                <div className='title-favorites-2'>
                  <Link to={`/films/${item.id}`}>Ver detalhes</Link>
                  <button onClick={() => handleDelete(item.id)}>
                    <BsTrash2Fill width={40} height='70' color='red' />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
