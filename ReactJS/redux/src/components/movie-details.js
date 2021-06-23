import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../actions"

const MovieDetails = () => {
    const dispatch = useDispatch()
    const details = useSelector ((state) => state.movieDetails)
    useEffect(() => {
        // props.getMovieDetails()
        dispatch(actions.getMovieDetails())
    },[dispatch])
    if (details) {
        return (
            <div className="alert alert-primary m-3">
                <h3>{details.name}</h3>
                <p>{details.year}</p>
            </div>
        )
    }
    return <h3>Loading..</h3>
}
// export default connect((state) => {
//     return {
//         details: state.movieDetails
//     }
// }, actions)(MovieDetails)
export default MovieDetails;