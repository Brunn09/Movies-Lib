import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";

import './MoviesGrid.css'

const Home = () => {

    const apiKEY= import.meta.env.VITE_API_KEY;
    const moviesURL = import.meta.env.VITE_API;

    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        
        const response = await fetch(url);
        const data = await response.json();

        setTopMovies(data.results);
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKEY}`

        getTopRatedMovies(topRatedUrl)
    }, []);

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies_container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home