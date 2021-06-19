import "./App.css";
import Navbar from "./components/Navbar";
import { AboutUs } from "./components/AboutUs";
import Register from "./components/Register";
import { NotFound } from "./components/NotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/">
          <Register />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
