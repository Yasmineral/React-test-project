import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  
  }

  // e represents the event parameter, i.e the input text
  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form style={{ display: 'flex' }}> 
        <input 
          type="text"
          name="title"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

export default AddTodo
