import React from 'react';

import { type ITodo, changeTodosSignal } from '../signals/todosSignal';

interface IProps {
  key: string;
  todo: ITodo;
}

const TodoItem = ({ todo }: IProps): React.JSX.Element => {
  console.log('TodoItem rendered with todo', todo);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeTodosSignal(todo, e.target.checked);
  };

  return (
    <div className='flex flex-h-center todo'>
      <div className='checkbox'>
        <div className='radio-container flex flex-v-center'>
          <label className='radio blue'>
            <input type='checkbox' name={todo.id} id={todo.id} checked={todo.isDone} onChange={handleOnChange} />
            <span className='slider round flex flex-v-center flex-h-center' />
          </label>
          <span className='radio-description'>{todo.name}</span>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
