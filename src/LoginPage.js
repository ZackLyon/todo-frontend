import React, { Component } from 'react'
import { logIn } from './request-utils.js';

export default class LoginPage extends Component {
  state = {
    email: null,
    password: null
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { handleToken, history } = this.props;

    console.log("email before submit ", email);
    console.log("password before submit ", password);

    const response = await logIn(email, password);
    console.log("response ", response);

    handleToken(response.body.token);

    history.push('/todos');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input type="email" onChange={(e)=>this.setState({email: e.target.value})}></input>
          </label>
          <label>
            Password
            <input type="password" onChange={(e)=>this.setState({password: e.target.value})}></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
