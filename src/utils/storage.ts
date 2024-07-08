import { type ITodo } from '../signals/todosSignal';

const TODOS_KEY = 'todos';

export const getTodosFromLocalStorage = (): ITodo[] => {
  const todos = localStorage.getItem(TODOS_KEY);

  return todos ? JSON.parse(todos) : [];
};

export const setTodosLocalStorage = (todos: ITodo[]): void => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};
