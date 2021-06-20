import { Component } from "react";
import { Artist } from "./Artist";
export default class Artists extends Component {
  state = {
    artists: [],
  };
  render() {
    if (this.state.artists.length > 0)
      return (
        <section className="Artists">
          {this.state.artists.map((artistInfo) => (
              <Artist artist={artistInfo} key={artistInfo.id} />
          ))}
        </section>
      );
    return <h3>Loading Artits...</h3>;
  }
  componentDidMount() {
    fetch("http://127.0.0.1:3000/artists")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ artists: data });
      })
      .catch((err) => console.log(err));
  }
}
