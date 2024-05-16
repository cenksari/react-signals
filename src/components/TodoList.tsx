import React from 'react';

import { useSignals } from '@preact/signals-react/runtime';

import TodoItem from './TodoItem';

import { type ITodo, completedTodos, uncompletedTodos } from '../signals/todosSignal';

interface IProps {
  title: string;
  todos: string;
}

const TodoList = ({ title, todos }: IProps): React.JSX.Element => {
  useSignals();

  console.log('TodoList rendered with title', title);

  const getTodos = (): ITodo[] => {
    if (todos === 'completed') {
      return completedTodos.value;
    } else {
      return uncompletedTodos.value;
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <div className='todos'>
        {getTodos().length > 0 ? getTodos().map((todo: ITodo, index: number): React.JSX.Element => (
          <TodoItem todo={todo} key={index.toString()} />
        )) : (
          <p>No todos found in {title.toLowerCase()} todos!</p>
        )}
      </div>
    </>
  );
};

export default TodoList;
