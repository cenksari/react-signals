import React from 'react';

import TodoItem from './TodoItem';

import { type ITodo } from '../signals/todosSignal';

interface IProps {
  title: string;
  todos: ITodo[];
}

const TodoList = ({ title, todos }: IProps): React.JSX.Element => {
  return (
    <>
      <h1>{title}</h1>
      <div className='todos'>
        {todos.length > 0 ? todos.map((todo: ITodo, index: number): React.JSX.Element => (
          <TodoItem todo={todo} key={index.toString()} />
        )) : (
          <p>No todos!</p>
        )}
      </div>
    </>
  );
};

export default TodoList;
