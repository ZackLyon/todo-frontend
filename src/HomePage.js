import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to='/login'>
          <div >
            Log In
          </div>
        </Link>
        <Link to='/signup'>
          <div>
            Sign Up
          </div>
        </Link>
      </div>
    )
  }
}
