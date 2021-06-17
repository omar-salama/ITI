import { Component } from "react";
import { NavLink as Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
        <div className="Navbar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <li className="nav-item">
                <div class="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link activeClassName="active" exact to="/" className="nav-link">Home</Link>
                  <Link activeClassName="active" to="/register" className="nav-link">Register</Link>
                </div>
              </li>
            </div>
          </nav>
        </div>
    );
  }
}
