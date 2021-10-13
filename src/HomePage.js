import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './App.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <Link to='/login'>
          <div className="home-link">
            Log In
          </div>
        </Link>
        <Link to='/signup'>
          <div className="home-link">
            Sign Up
          </div>
        </Link>
      </div>
    )
  }
}
