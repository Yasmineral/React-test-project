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
        completed: true
      },
      {
        id: 3,
        title: 'Drink more wine',
        completed: false
      }
    ]
  }

  markComplete = () => {
    console.log('From app.js')
  }
  
  render() {
    return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete} />
    </div>
    );
  }
}

export default App;
