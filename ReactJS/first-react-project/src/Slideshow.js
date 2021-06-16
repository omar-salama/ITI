import React from "react";
// let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
class Slideshow extends React.Component {
  timer;
  i = 1;
  constructor() {
    super();

    this.state = {
      imgURL: `${this.i}.jpg`,
    };
  }

  render() {
    const styles = {
      container: {
        backgroundColor: "rgb(214,32,63)",
        padding: "15px",
        margin: "5px auto",
        border: "2px solid black",
        borderRadius: "10px",
      },
    };
    return (
      <div className="RealtimeInput" style={styles.container}>
        <img id="myImg" src={this.state.imgURL} height="200px" alt="meh" />
        <br />
        <input
          type="button"
          value="Previous"
          onClick={() => {
            if (this.i !== 1) {
              this.i--;
              this.setState({
                imgURL: `/${this.i}.jpg`,
              });
            }
          }}
        />
        <input style={styles.button}
          type="button"
          value="SlideShow"
          onClick={() => {
            this.timer = setInterval(() => {
              if (this.i === 6) {
                this.i = 0;
              }
              this.i++;
              this.setState({
                imgURL: `/${this.i}.jpg`,
              });
            }, 600);
          }}
        />
        <input
          type="button"
          value="Stop"
          onClick={() => {
            clearTimeout(this.timer);
          }}
        />
        <input
          type="button"
          value="Next"
          onClick={() => {
            if (this.i < 6) {
              this.i++;
              this.setState({
                imgURL: `/${this.i}.jpg`,
              });
            }
          }}
        />
      </div>
    );
  }
}
export default Slideshow;
