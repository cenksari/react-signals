import React from 'react';

import { useSignals } from "@preact/signals-react/runtime";

import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { completedTodos, uncompletedTodos } from './signals/todosSignal';

const App = (): React.JSX.Element => {
  useSignals();

  return (
    <div className='container flex flex-col flex-v-center'>
      <Header />

      <TodoForm />

      <TodoList title='Not completed' todos={completedTodos.value} />

      <TodoList title='Completed' todos={uncompletedTodos.value} />

      <Footer />
    </div>
  );
};

export default App;
