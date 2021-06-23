import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Movies extends Component {
  render() {
    return <div className="Movies">{this.renderMovies(this.props)}</div>;
  }
  renderMovies({ movies }) {
    if (movies) {
      return movies.map((movie) => (
        <div className="card m-3" key={movie.id}>
          <div className="card-body">
            <h3 className="card-title">{movie.name}</h3>
            <p className="card-text">{movie.year}</p>
          </div>
        </div>
      ));
    }
    return <h3>Loading Movies...</h3>
  }
  componentDidMount() {
    this.props.getMovies();
  }
}
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
export default connect(mapStateToProps, actions)(Movies);
