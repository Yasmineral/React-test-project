import React, { Component } from 'react';
import TodoItem from './TodoItem' ;
import PropTypes from 'prop-types';

class Todos extends Component {
  

  render() {
    return this.props.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} 
    delTodo={this.props.delTodo} />
    ));
  }
}

// PropTypes - a form of type checking
// to avoid passing in the wrong data type to a component
// by default, the props or a compenent are optional
// Adding 'isRequired' makes sure a warning is generated if the prop is not
// provided to the component.
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
   