import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {

  let id = 0;

  return (
    <ul className="todos">
      {todos.map( todo => {

        id++;
        return (
          <li key={id}>
            <Todo name={todo} id={id}/>
          </li>
        )

      })}
    </ul>
  );

}

export default TodoList;