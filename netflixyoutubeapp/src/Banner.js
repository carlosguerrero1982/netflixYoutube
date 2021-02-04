import React,{useState,useEffect} from 'react';
import './Banner.css';
import axios from './axios';
import requests from './Requests';

function Banner() {


    const [movie, setMovie] = useState([]);

    useEffect(() => {
        
        async function fetchData(){

            const request = await axios.get(requests.fetchNetflixOriginals);
          //  console.log(request);
           setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);

           return request;
        }

        fetchData();    
    },  [])

    console.log(movie);


    function truncate(string,n){

        return string?.length > n ? string.substr(0,n-1) + '...': string;
    }

    

    return (
        <header className="banner" style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
            backgroundSize:"cover"
        }}>
           
           <div className="banner_contents">

               <h1 className="banner_title"> {movie?.title || movie?.name || movie?.original_name }</h1>

               <div className="banner_buttons">

                   <button className="bunner_button">Play</button>
                   <button className="bunner_button">My List</button>
               </div>
                
                <h1 className="banner_descriptions">{ truncate(
                    movie?.overview,150
                )}</h1>

           </div>

    
           <div className="banner_fadeBotton" />

        </header>

       

    )
}

export default Banner
