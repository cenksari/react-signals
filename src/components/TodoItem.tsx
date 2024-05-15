import React from 'react';

import { todosSignal } from '../signals/todosSignal';

const TodoItem = ({ todo }: any): React.JSX.Element => {
  const handleOnChange = (e: any) => {
    const { checked } = e.target;

    todosSignal.value = todosSignal.value.map((t: any) => {
      if (t.id === todo.id) {
        return {
          ...t,
          isDone: checked,
        };
      }

      return t;
    });
  };

  return (
    <div className='flex flex-h-center todo'>
      <div className='checkbox'>
        <input type='checkbox' checked={todo.isDone} onChange={handleOnChange} />
      </div>
      <div className='flex-grow'>
        {todo.name}
      </div>
    </div>
  )
};

export default TodoItem;
