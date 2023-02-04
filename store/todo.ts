import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export interface Todo {
  id: string
  label: string
  done: boolean
  createdAt: Date
  updatedAt: Date
}

export type Todos = Todo[] | undefined;

export interface TodoAdd {
  label: string
}

export interface TodoUpdate {
  label?: string
  done?: boolean
}

export interface TodoState {
  items: Todo[];
}

const state = (): TodoState => ({
  items: [],
})

const getters = {
  getById: (state: TodoState) => (id: string) => {
    return (id: string ) =>
      state.items.find((item: Todo) => item.id === id)
  },
  getOrderedTodos: (state: TodoState) =>
    [...state.items].sort(
      (a: Todo, b: Todo) =>
        a.createdAt.getTime() - b.createdAt.getTime(),
    ),
}

export const useTodoStore = defineStore('todoStore', {
  state,
  getters,
  actions: {
    add(partialTodo: TodoAdd) {
      const todo: Todo = {
        id: uuid(),
        ...partialTodo,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      this.items.push(todo)
    },
    remove(id: string) {
      this.items = this.items.filter((todo) => todo.id !== id)
    },
    update(id: string, update: TodoUpdate) {
      const index = this.items.findIndex((item) => item.id === id);
      this.items[index] = {
        ...this.items[index],
        ...update,
        updatedAt: new Date(),
      };
    },
  }
})
