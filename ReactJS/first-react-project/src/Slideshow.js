import React from "react";
class Slideshow extends React.Component {
  imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
  timer;
  // i = 0;
  constructor() {
    super();

    this.state = {
      i: 0,
      currentImg: this.imgs[0],
    };
  }

  previous = () => {
    console.log("asdas");
    let { i } = this.state;
    if (i > 0) {
      i--;
      this.setState({
        currentImg: this.imgs[i],
        i,
      });
    }
  };
  next = () => {
    let { i } = this.state;
    if (i < this.imgs.length - 1) {
      i++;
      this.setState({
        currentImg: this.imgs[i],
        i,
      });
    }
  };
  slideshow = () => {
    clearInterval(this.timer);
    let { i } = this.state;
    if (i === this.imgs.length - 1) {
      i = -1; // ?????
    }
    if (i < this.imgs.length - 1) {
      i++;
      this.setState({
        currentImg: this.imgs[i],
        i,
      });
    }
    this.timer = setTimeout(this.slideshow, 700);
  };

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
        <img id="myImg" src={this.state.currentImg} height="200px" alt="meh" />
        <br />
        <input type="button" value="Previous" onClick={this.previous} />
        <input
          style={styles.button}
          type="button"
          value="SlideShow"
          onClick={this.slideshow}
        />
        <input
          type="button"
          value="Stop"
          onClick={() => {
            clearTimeout(this.timer);
          }}
        />
        <input type="button" value="Next" onClick={this.next} />
      </div>
    );
  }
}
export default Slideshow;
