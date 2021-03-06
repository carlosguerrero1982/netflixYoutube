import axios from './axios';
import React,{useState,useEffect} from 'react';
import './Row.css';

function Row({title,fetchUrl,isLargeRow=false}) {

    

    const [movies, setMovies] = useState([]);

    const baseURL= 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
       
         const fetch = async () =>{

            const request = await axios.get(fetchUrl);
        
            setMovies(request.data.results);

          return request;

      }

      return fetch()
    

    }, [fetchUrl])

    console.log(movies);

    return (
        <div className="row">   
            <h2>{title}</h2>

        
        <div className="row_posters">

        {movies.map((movie)=>(

            ((isLargeRow && movie.poster_path) || 
            (!isLargeRow && movie.backdrop_path)) && (

                <img className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            key={movie.id}
            src={`${baseURL}${ isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name}/>
            )
            
            ))}


        </div>

       

        </div>
    )
}

export default Row
