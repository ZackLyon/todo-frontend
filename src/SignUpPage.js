import React, { Component } from 'react'
import { signUp } from './request-utils.js';

export default class SignUpPage extends Component {
  state = {
    email: null,
    password: null
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { handleToken, history } = this.props;

    const response = await signUp(email, password);
    console.log("response ", response);

    handleToken(response.body.token);

    history.push('/todos');
  }

  render() {
    return (
      <div className="home-container">
        <form onSubmit={this.handleSubmit} className="form-class">
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
