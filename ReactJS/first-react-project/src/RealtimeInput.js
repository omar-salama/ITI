import React from "react";
class RealtimeInput extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  resetText = (e) => {
    this.setState({
      text: "",
    });
  };

  render() {
    const styles = {
      container: {
        backgroundColor: "darkcyan",
        padding: "15px",
        margin: "5px auto",
        border: "2px solid black",
        borderRadius: "10px",
      },
    };
    return (
      <div className="RealtimeInput" style={styles.container}>
        <input type="text" onChange={this.handleChange} value={this.state.text}/>
        <input type="button" value="Reset" onClick={this.resetText}/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
export default RealtimeInput;
