import { computed, effect, signal } from '@preact/signals-react';

import { getTodosFromLocalStorage, setTodosLocalStorage } from '../tools/storage';

export interface ITodo {
  id: string;
  name: string;
  isDone: boolean;
}

export const todosSignal = signal(getTodosFromLocalStorage());

effect(() => {
  setTodosLocalStorage(todosSignal.value);
});

export const completedTodos = computed(
  () => todosSignal.value.filter((todo: ITodo) => todo.isDone === true),
);

export const uncompletedTodos = computed(
  () => todosSignal.value.filter((todo: ITodo) => todo.isDone === false),
);
