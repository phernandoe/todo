import React, { useState } from 'react';
const parseInput = require('../scripts/util');

const Input = ({addTodo}) => {

  const [input, setInput] = useState('');
  const placeholder = "add take out trash";

  const delegateAction = i => {
    
    switch (i[0]) {
      case 'add':
        addTodo((prevTodos) => [...prevTodos, i[1]]);
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