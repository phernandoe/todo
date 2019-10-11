import React, { useState } from "react";

import Layout from '../components/Layout';
import Input from '../components/Input';
import TodoList from '../components/TodoList';

export default () => {

  const initialTodo = {
    id: 0,
    title: 'Hello World',
    completed: false
  };

  const [todos, setTodos] = useState([initialTodo]);

  return (
    <Layout>
      <Input setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} />
    </Layout>
  );
  
};

