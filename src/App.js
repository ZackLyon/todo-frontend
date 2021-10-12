
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink
} from 'react-router-dom';

import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import SignUpPage from './SignUpPage.js';
import TodosPage from './TodosPage.js';

import './App.css';

const TOKEN = 'TOKEN';

export default class App extends Component {
    state = {
      token: localStorage.getItem(TOKEN) || ''
    }

    handleToken = async(token) => {
      
      this.setState({token: token});

      localStorage.setItem(TOKEN, token);
      console.log("received token ", token);
    }

    render() {
        return (
            <div>
                <Router>
                    <header>
                      <div>
                        <NavLink exact className="unclickedLink" activeClassName="activeLink" to="/">Home</NavLink>
                      </div>
                      <div>
                        <NavLink exact className="unclickedLink" activeClassName="activeLink" to="/signup">Sign Up</NavLink>
                      </div>
                    </header>

                    <Switch>
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <SignUpPage handleToken={this.handleToken} {...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <LoginPage {...routerProps} />} 
                        />
                        <Route 
                            path="/todos" 
                            exact
                            render={(routerProps) => <TodosPage {...routerProps} />} 
                        />
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        
                    </Switch>
                </Router>
            </div>
        )
    }
}
