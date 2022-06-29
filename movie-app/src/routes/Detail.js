import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail(){
    const {id}= useParams()
    const [Loading,setLoading]  = useState(false)
    const [movie,setMovie] = useState([])

    useEffect(()=>{
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(res => res.json())
        .then(res2 => (
            setLoading(true),
            setMovie(res2)
            ))
    },[])
    return (
        Loading? <h1>Loding...</h1>: setMovie()
    )
}

export default Detail