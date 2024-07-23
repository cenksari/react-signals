// types
import { type ITodo } from '../signals/todosSignal';

// variables
const TODOS_KEY = 'todos';

/**
 * Retrieves the list of todos from local storage.
 *
 * @returns {ITodo[]} The list of todos stored in local storage.
 */
export const getTodosFromLocalStorage = (): ITodo[] => {
  const todos = localStorage.getItem(TODOS_KEY);

  return todos ? JSON.parse(todos) : [];
};

/**
 * Sets the list of todos in local storage.
 *
 * @param {ITodo[]} todos - The list of todos to be stored in local storage.
 */
export const setTodosLocalStorage = (todos: ITodo[]): void => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};
