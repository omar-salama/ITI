import { Component } from "react";
import Form from "./Form";
import RegisteredUsers from "./RegisteredUsers";
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  registerUser = (value) => {
    let users = this.state.users;
    users.push(value);
    this.setState({ users: users });
  };
  render() {
    return (
      <div className="Register w-75 mx-auto">
        <Form registerUser={this.registerUser} />
        <RegisteredUsers users={this.state.users} />
      </div>
    );
  }
}
