import React from 'react';

import { useSignals } from '@preact/signals-react/runtime';

// components
import TodoItem from './TodoItem';

// types && utils
import { type ITodo, completedTodos, uncompletedTodos } from '../signals/todosSignal';

// interfaces
interface IProps {
  title: string;
  todos: string;
}

const TodoList = ({ title, todos }: IProps): React.JSX.Element => {
  useSignals();

  console.log('TodoList rendered with title', title);

  /**
   * Retrieves the list of todos based on the specified filter.
   *
   * @returns {ITodo[]} The list of todos filtered by completion status.
   */
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
