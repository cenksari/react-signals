import { type Signal, type ReadonlySignal, computed, effect, signal } from '@preact/signals-react';

// utils
import { getTodosFromLocalStorage, setTodosLocalStorage } from '../utils/storage';

// interfaces
export interface ITodo {
  id: string;
  name: string;
  isDone: boolean;
}

export const todosSignal: Signal<ITodo[]> = signal(getTodosFromLocalStorage());

effect(() => {
  setTodosLocalStorage(todosSignal.value);
});

/**
 * Updates the todosSignal with a new array of todos.
 *
 * @param {ITodo[]} todos - The new array of todos to update the signal with.
 */
export const updateTodosSignal = (todos: ITodo[]): void => {
  todosSignal.value = todos;
};

/**
 * Updates the isDone status of a specific todo in the todosSignal.
 *
 * @param {ITodo} todo - The todo to update.
 * @param {boolean} checked - The new isDone status of the todo.
 */
export const changeTodosSignal = (todo: ITodo, checked: boolean): void => {
  todosSignal.value = todosSignal.value.map((t: ITodo) =>
    t.id === todo.id ? { ...t, isDone: checked } : t
  );
};

/**
 * A computed signal that returns an array of completed todos.
 *
 * This signal is derived from the `todosSignal` and filters out only the todos that are marked as completed.
 *
 * @returns {ReadonlySignal<ITodo[]>} A signal that emits an array of completed todos.
 */
export const completedTodos: ReadonlySignal<ITodo[]> = computed(() =>
  todosSignal.value.filter((todo: ITodo) => todo.isDone)
);

/**
 * A computed signal that returns an array of uncompleted todos.
 *
 * This signal is derived from the `todosSignal` and filters out only the todos that are not marked as completed.
 *
 * @returns {ReadonlySignal<ITodo[]>} A signal that emits an array of uncompleted todos.
 */
export const uncompletedTodos: ReadonlySignal<ITodo[]> = computed(() =>
  todosSignal.value.filter((todo: ITodo) => !todo.isDone)
);
