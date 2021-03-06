import React, { Component } from 'react'
import { getTodos, createTodo, updateTodo } from './request-utils.js'

import './App.css'

export default class TodosPage extends Component {
  state = {
    todo: '',
    todosList: []
  }

  componentDidMount = async() => {
    const { token } = this.props;
    
    const currentTodos = await getTodos(token);
    this.setState({todosList: currentTodos})
  }

  handleCreateSubmit = async(e) => {
    e.preventDefault();
    
    const { token } = this.props;
    const { todo } = this.state;

    await createTodo(token, todo);

    const currentTodos = await getTodos(token)
    this.setState({todosList: currentTodos, todo: ''})
  }

  render() {
    const { todosList, todo } = this.state;
    const { token } = this.props;

    return (
      <div className="todo-page">
        <div className="form-container">
          <form onSubmit={this.handleCreateSubmit} className="form-class">
            <div className="create-label">
              Create Todo
            </div>
            <input
              value={todo}
              onChange={e => this.setState({todo: e.target.value})}></input>
              <div className="button-container">
                <button type="submit">Submit</button>
              </div>
          </form>
        </div>
        <ul className="todos-container">
          {todosList.map(({ todo, id, completed }) => <li key={id}
          className={!completed ? "todo" : "todo completedTodo"} 
          onClick={async() => { await updateTodo(token, todo,   !completed, id);
            const currentTodos = await getTodos(token);
            this.setState({todosList: currentTodos, todo: ''});
          }}
          >{todo}</li>)}
        </ul>
      </div>
    )
  }
}
