import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDos extends Component {
  render() {
    let todoItems;
    if(this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        // console.log(project);
        return (
          <ToDoItem key={todo.title} todo={todo} />
        )
      });
    }
    return (
      <div className="ToDos">
        <h3>To-Do List</h3>
        {todoItems}
      </div>
    );
  }
}

ToDos.propTypes = {
  todos: PropTypes.array
}

export default ToDos;
