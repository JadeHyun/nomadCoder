import React, { useState, useEffect } from 'react';
import Movies from '../components/Movies';

function Home(){ 

    const [loading,setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    
    // -------- async await 방법 ---------
    const getMovies = async ()=>{
      const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      const json = await response.json();
      setMovies(json.data.movies)
      setLoading(false) 
      console.log(json.id)
    }
      
    useEffect(()=>{
        getMovies()
      //------ promise then 방법 ----------
      // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      // .then(res => res.json())
      // .then(a=> {
      //   setMovies(a.data.movies)
      //   setLoading(false)
      // })
    },[])
      
    return (
        
        <div className="App">
          {(loading ? "loading...": <div>{movies.map(movie => (<Movies key={movie.id}
            id={movie.id}
            medium_cover_image={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}/> 
          ))}</div>)}
          </div>
        );
}

export default Home