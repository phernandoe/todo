import React, { useState } from "react";

import Layout from '../components/Layout';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import Help from '../components/Help';

export default () => {

  const initialTodo = {
    id: 0,
    title: 'Deploy App',
    completed: false
  };

  const [todos, setTodos] = useState([initialTodo]);

  return (
    <>
      <Layout>
        <Input setTodos={setTodos} todos={todos}/>
        <TodoList todos={todos} />
      </Layout>
      <Help />
      <Footer />  
    </>
  );
  
};

