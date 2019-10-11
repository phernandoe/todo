import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {

  return (
    <ul className="todos">
      <div className="list-header"> 
        <h3 className="title-header">Title</h3>
        <h3 className="id-header">ID</h3>
      </div>

      {todos.map( todo => {
        return (
          <li key={todo.id}>
            <Todo todo={todo}/>
          </li>
        )

      })}
    </ul>
  );

}

export default TodoList;