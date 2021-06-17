import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home"
import Register from "./components/Register"
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
