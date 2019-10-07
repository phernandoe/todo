import React, { useState } from "react";

import Layout from '../components/Layout';
import Input from '../components/Input';
import TodoList from '../components/TodoList';

export default () => {

  const [todos, setTodos] = useState(['Hello', 'World']);

  return (
    <Layout>
      <Input addTodo={setTodos} todos={todos}/>
      <TodoList todos={todos} />
    </Layout>
  );
  
};

