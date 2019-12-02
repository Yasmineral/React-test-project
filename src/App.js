import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Wash up',
        completed: false
      },
      {
        id: 2,
        title: 'Have a bath',
        completed: false
      },
      {
        id: 3,
        title: 'Drink more wine',
        completed: false
      }
    ]
  }
  render() {
    return (
    <div className="App">
      <Todos todos={this.state.todos}/>
    </div>
    );
  }
}

export default App;
