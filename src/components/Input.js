import React, { useState } from 'react';
const parseInput = require('../scripts/util');

const Input = ({addTodo}) => {

  const [input, setInput] = useState('');
  const placeholder = "add cook -r";
  
  const onSubmit = e => {
    e.preventDefault();
    console.log(parseInput(input));
    addTodo((prevTodos) => [...prevTodos, input]);
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
      type="text" />

    </form>
  );
  
};

export default Input;