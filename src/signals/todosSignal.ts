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

export const completedTodoCount = computed(
  () => todosSignal.value.filter((todo: ITodo) => todo.isDone === true).length,
);

export const ongoingTodoCount = computed(
  () => todosSignal.value.filter((todo: ITodo) => todo.isDone === false).length,
);
