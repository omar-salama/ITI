import "./App.css";
import { Header } from "./components/Header";
import Artists from "./components/Artists";
import { ArtistInfo } from "./components/ArtistInfo";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/artist-details/:id"} component={ArtistInfo} />
        <Route path={"/"} exact>
          <Header />
          <Artists />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
