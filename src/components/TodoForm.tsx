import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { todosSignal, type ITodo } from '../signals/todosSignal';

const TodoForm = (): React.JSX.Element => {
  const [values, setValues] = React.useState<ITodo>({
    id: '',
    name: '',
    isDone: false,
  });

  const handleChange = (e:any) => {
    const { value } = e.target;

    setValues({
      id: uuidv4(),
      name: value,
      isDone: false,
    });
  };

  const handleAddTodo = (e: any) => {
    e.preventDefault();

    const todo = {
      id: values.id,
      name: values.name,
      isDone: values.isDone,
    };

    todosSignal.value = [todo, ...todosSignal.value];

    setValues({ id: '', name: '', isDone: false });
  };

  return (
    <div className='form'>
      <form onSubmit={handleAddTodo} className='flex flex-space-between'>
        <input
          required
          type='text'
          name='todo'
          tabIndex={0}
          autoComplete='off'
          className='flex-grow'
          onChange={handleChange}
          placeholder='Add new todo'
        />
        <button
          type='submit'
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;