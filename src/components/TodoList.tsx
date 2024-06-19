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

  const getTodos = (): ITodo[] =>
    todos === 'completed' ? completedTodos.value : uncompletedTodos.value;

  return (
    <>
      <h1>{title}</h1>
      <div className='todos'>
        {getTodos().length > 0 ? (
          getTodos().map((todo: ITodo): React.JSX.Element => <TodoItem todo={todo} key={todo.id} />)
        ) : (
          <p>No todos found in {title.toLowerCase()} todos!</p>
        )}
      </div>
    </>
  );
};

export default TodoList;
