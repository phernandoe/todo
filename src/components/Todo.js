import React from 'react';

const Todo = ({todo}) => {

  if (todo.completed) {
    return (
      <div className="todo list-item completed"> 
        <h3 className="title">{todo.title}</h3>
        <h3 className="id">{todo.id}</h3>
      </div>
    )
  } else {
    return (
      <div className="todo list-item">
        <h3 className="title">{todo.title}</h3>
        <h3 className="id">{todo.id}</h3>
      </div>
    )
  }

};

export default Todo;