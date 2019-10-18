import React, { useState } from 'react';
const parseInput = require('../scripts/util');

const Input = ({setTodos, todos}) => {

  const [input, setInput] = useState('');
  const placeholder = "add take out trash";

  const createTodo = name => {
    return ( {
      id: todos.length,
      title: name,
      completed: false
    })
  };

  const deleteTodo = id => {
    id = parseInt(id);
    setTodos( (prevTodos) => prevTodos.filter( (todo) => todo.id !== id ) );
  };

  const renameTodo = (id, newTitle) => {
    id = parseInt(id);
    console.log(id, newTitle);
    setTodos( (prevTodos) => Array.from(prevTodos, todo => {
      if (todo.id === id) {
        todo.title = newTitle;
      }
      return todo;
    }))
  }

  const delegateAction = i => {
    
    switch (i[0]) {
      case 'add':
        setTodos((prevTodos) => [...prevTodos, createTodo(i[1])]);
        break;

      case 'del':
        deleteTodo(i[1]);
        break;

      case 'rn':
        const args = i[1].split(' ');
        renameTodo(args[0], args[1]);
        break;

      default:
        alert('Unknown command');
        break;
    }
  }
  
  const onSubmit = e => {
    e.preventDefault();
    delegateAction(parseInput(input));
    setInput('');
  }

  const onChange = e => setInput(e.target.value);

  return (
    <form onSubmit={onSubmit} className="input">

      <label htmlFor="command">></label>

      <input 
      className="command" 
      name="command" 
      placeholder={placeholder} 
      onChange={onChange}
      value={input}
      autoComplete="off"
      type="text" />

    </form>
  );
  
};

export default Input;