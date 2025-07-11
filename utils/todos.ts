import { Todo } from "@/types/todos";

export const getTodos = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const todos: Todo[] = await response.json();
      return todos;
    };

  export const getOneTodo = async (id: string) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const todo: Todo = await response.json();
      return todo;
    };