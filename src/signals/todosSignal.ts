import { type Signal, type ReadonlySignal, computed, effect, signal } from '@preact/signals-react';

import { getTodosFromLocalStorage, setTodosLocalStorage } from '../utils/storage';

export interface ITodo {
  id: string;
  name: string;
  isDone: boolean;
}

export const todosSignal: Signal<ITodo[]> = signal(getTodosFromLocalStorage());

effect(() => {
  setTodosLocalStorage(todosSignal.value);
});

export const updateTodosSignal = (todos: ITodo[]): void => {
  todosSignal.value = todos;
};

export const changeTodosSignal = (todo: ITodo, checked: boolean): void => {
  todosSignal.value = todosSignal.value.map((t: ITodo) =>
    t.id === todo.id ? { ...t, isDone: checked } : t
  );
};

export const completedTodos: ReadonlySignal<ITodo[]> = computed(() =>
  todosSignal.value.filter((todo: ITodo) => todo.isDone)
);

export const uncompletedTodos: ReadonlySignal<ITodo[]> = computed(() =>
  todosSignal.value.filter((todo: ITodo) => !todo.isDone)
);
