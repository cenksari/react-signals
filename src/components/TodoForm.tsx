import React, { type FormEvent } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { todosSignal, type ITodo } from '../signals/todosSignal';

const TodoForm = (): React.JSX.Element => {
  const [values, setValues] = React.useState<ITodo>({
    id: '',
    name: '',
    isDone: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    setValues({ id: uuidv4(), name: value, isDone: false });
  };

  const handleAddTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const todo: ITodo = {
      id: values.id,
      name: values.name,
      isDone: values.isDone,
    };

    setValues({ id: '', name: '', isDone: false });

    todosSignal.value = [todo, ...todosSignal.value];
  };

  return (
    <div className='form'>
      <form onSubmit={handleAddTodo}>
          <div>
            <label htmlFor='todo'>Todo text</label>
          </div>
          <div className='flex flex-space-between'>
            <input
              required
              id='todo'
              type='text'
              name='todo'
              tabIndex={0}
              autoComplete='off'
              className='flex-grow'
              onChange={handleChange}
              placeholder='Add new todo'
            />
            <button type='submit'>Add</button>
          </div>
      </form>
    </div>
  );
};

export default TodoForm;