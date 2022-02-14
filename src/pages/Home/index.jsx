import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./home.css"


export default function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function loadingMovies() {
            const response = await api.get('/films/')
            console.log(response.data)
            setMovies(response.data)
        }
        loadingMovies()

    }, [])



    return (
        <div className="App">
            <div>
                {
                    movies?.map((movie) => {
                        return (
                            <>

                                <div className="container">
                                    <div>
                                        <h1>{movie.original_title}</h1>
                                        <img className="image_primary" src={movie.image} alt={movie.original_title} />
                                        <div class="page-wrapper">
                                        <div class="circle-wrapper">
                                            <div class="error circle"></div>
                                            <div class="icon">
                                                <i class="fa fa-times"></i>
                                            </div>
                                            </div>
                                            
                                            
                                    </div>
                                    </div>
                                
                                    <div>

                                        <img className="image_secondary" src={movie.movie_banner} width="20%" height='30%' alt={movie.original_title} />
                                        <p> {movie.description}</p>
                                        <Link className="btn"> Acessar</Link>
                                    </div>

                                </div>





                            </>

                        )
                    })
                }
            </div>

        </div>
    );
}

