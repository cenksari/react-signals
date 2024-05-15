import React from 'react';

import { useSignals } from "@preact/signals-react/runtime";

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { todosSignal } from './signals/todosSignal';

const App = (): React.JSX.Element => {
  useSignals();

  return (
    <div className='container flex flex-col flex-v-center'>
      <TodoForm />

      <h1>Not completed</h1>
      <TodoList todos={todosSignal.value.filter((todo: any) => todo.isDone === false)} />

      <h1>Completed</h1>
      <TodoList todos={todosSignal.value.filter((todo: any) => todo.isDone === true)} />
    </div>
  );
};

export default App;
