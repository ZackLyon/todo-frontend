
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink,
    Redirect
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
      const { token } = this.state;
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
                      <div>
                        <NavLink exact className="unclickedLink" activeClassName="activeLink" to="/login">Log In</NavLink>
                      </div>
                      <div>
                        <NavLink onClick={() => this.setState({token: ''})} className="unclickedLink" to="/">Log Out</NavLink>
                      </div>
                      {token 
                      ?
                        <div>
                        <NavLink exact className="unclickedLink" activeClassName="activeLink" to="/todos">Todos</NavLink>
                        </div>
                      : <div></div>
                      }
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
                            render={(routerProps) => <LoginPage
                            handleToken={this.handleToken} {...routerProps} />} 
                        />
                        <Route 
                            path="/todos" 
                            exact
                            render={(routerProps) => 
                              token ?
                              <TodosPage token={token} {...routerProps} />
                            : <Redirect to="/signup" />} 
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
