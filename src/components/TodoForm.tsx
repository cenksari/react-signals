import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

// types && utils
import { type ITodo, todosSignal, updateTodosSignal } from '../signals/todosSignal';

const TodoForm = (): JSX.Element => {
  console.log('TodoForm rendered');

  const [values, setValues] = useState<ITodo>({
    id: '',
    name: '',
    isDone: false,
  });

  /**
   * Handles the change event for the input field in the TodoForm.
   * Updates the state with the new value of the input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, name: e.target.value });
  };

  /**
   * Handles the submission of the TodoForm.
   * Prevents the default form submission behavior, checks if the todo name is not empty,
   * creates a new todo object, resets the form state, and updates the todosSignal with the new todo.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event object.
   */
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { name } = values;

    if (name.trim() !== '') {
      const todo: ITodo = {
        name,
        id: uuidv4(),
        isDone: false,
      };

      setValues({ id: '', name: '', isDone: false });

      updateTodosSignal([todo, ...todosSignal.value]);
    }
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
            value={values.name}
            className='flex-grow'
            onChange={handleChange}
            placeholder='Add new todo'
          />
          <button type='submit' tabIndex={0}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
