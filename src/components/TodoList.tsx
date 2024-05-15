import React from 'react';

import TodoItem from './TodoItem';

import { type ITodo } from '../signals/todosSignal';

const TodoList = ({ todos }: any): React.JSX.Element => {
  return (
    <div className='todos'>
      {todos.length > 0 ? todos.map((todo: ITodo, index: number) => (
        <TodoItem todo={todo} key={index.toString()} />
      )) : (
        <p>No todos!</p>
      )}
    </div>
  );
};

export default TodoList;
