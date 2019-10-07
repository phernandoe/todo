import React, { useState, useEffect } from 'react';

const Todo = ({name, id}) => {

  const emptyTodo = {
    id: id,
    title: name,
    completed: false
  };

  const [todo, setTodo] = useState(emptyTodo);

  useEffect(() => {
    setTodo({id: id, title:name, completed: false});
  }, [name, id]);

  return (
    <div className="todo list-item"> 
      <h3 className="title">{todo.title}</h3>
      <h3 className="id">{todo.id}</h3>
    </div>
  )

}

export default Todo;