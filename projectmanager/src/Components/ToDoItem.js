import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
  render() {
    return (
      <li className="ToDo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

ToDoItem.propTypes = {
  todo: PropTypes.object
}

export default ToDoItem;
