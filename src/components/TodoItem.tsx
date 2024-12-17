// types && utils
import { type ITodo, changeTodosSignal } from '../signals/todosSignal';

// interfaces
interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = ({ todo }) => {
  console.log('TodoItem rendered with todo', todo);

  /**
   * Handles the change event for the checkbox input.
   * Updates the todo's isDone status based on the checkbox's checked state.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object.
   */
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeTodosSignal(todo, e.target.checked);
  };

  return (
    <div className='flex flex-h-center todo'>
      <div className='checkbox'>
        <div className='radio-container flex flex-v-center'>
          <label className='radio blue'>
            <input
              type='checkbox'
              name={todo.id}
              id={todo.id}
              checked={todo.isDone}
              onChange={handleOnChange}
            />
            <span className='slider round flex flex-v-center flex-h-center' />
          </label>
          <span className='radio-description'>{todo.name}</span>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
