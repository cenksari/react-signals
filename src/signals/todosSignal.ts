import { type Signal, computed, effect, ReadonlySignal, signal } from '@preact/signals-react';

import { getTodosFromLocalStorage, setTodosLocalStorage } from '../tools/storage';

export interface ITodo {
  id: string;
  name: string;
  isDone: boolean;
}

export const todosSignal: Signal<ITodo[]> = signal(getTodosFromLocalStorage());

effect(() => {
  setTodosLocalStorage(todosSignal.value);
});

export const completedTodos: ReadonlySignal<ITodo[]> = computed(
  () => todosSignal.value.filter((todo: ITodo) => todo.isDone === true),
);

export const uncompletedTodos: ReadonlySignal<ITodo[]> = computed(
  () => todosSignal.value.filter((todo: ITodo) => todo.isDone === false),
);
