import "./App.css";
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducers from "./reducers"
import Movies from "./components/movies" 
import MovieDetails from "./components/movie-details";

function App() {
  return (
    <Provider store={createStore(rootReducers)}>
      <div className="App">
        <Movies />
        <MovieDetails />
      </div>
    </Provider>
  );
}

export default App;
