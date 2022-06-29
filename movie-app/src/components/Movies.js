// import PropsType from 'props-types'
import {Link} from 'react-router-dom'
function Movies(props){
    return (
        <>
        <img src={props.medium_cover_image} />
        <Link to={`/movie/${props.id}`}><h1>{props.title}</h1></Link>
        <p>{props.summary}</p>
        <ul>
            {props.genres.map(g => <li key={g}>{g}</li>)}
        </ul>
      </>
    )
}

// Movies.PropsType = {
//     medium_cover_image:PropsType.string.isRequired,
//     title:PropsType.string.isRequired ,
//     summary:PropsType.string.isRequired ,
//     genres:PropsType.arrayof(PropsType.string).isRequired
// }

export default Movies