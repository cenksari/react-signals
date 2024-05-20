import { type ITodo } from "../signals/todosSignal";

export const getTodosFromLocalStorage = (): ITodo[] => {
  const todos = localStorage.getItem('todos');

  return todos ? JSON.parse(todos) : [];
};

export const setTodosLocalStorage = (todos: ITodo[]): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
