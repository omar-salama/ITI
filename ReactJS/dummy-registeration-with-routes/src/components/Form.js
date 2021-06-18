import { Component } from "react";
import Modal from "react-modal";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  
  getName = (e) => {
      this.name = e.target.value;
  };
  getAge = (e) => {
     this.age = e.target.value;
  };
  handleSubmit = () => {
    let contacts = {name:  this.name,  age: this.age}
    this.props.registerUser(contacts);
    this.closeModal();
  };
  render() {
    return (
      <div className="Form">
        <input
          className="btn btn-success mt-5"
          type="button"
          value="Register"
          onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.isOpen}
          style={{
            content: {
              width: "50%",
              top: "25%",
              left: "25%",
              right: "auto",
              bottom: "auto",
            },
          }}
          ariaHideApp={false}
        >
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={this.getName}
              />
            </div>
            <div className="mb-3">
              <label for="age" className="form-label">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="age"
                onChange={this.getAge}
              />
            </div>
            <button
              className="btn btn-success"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </Modal>
        <div>{this.state.users}</div>

      </div>
    );
  }
}