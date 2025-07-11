import { Todo } from "@/types/todos";

export const getTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      
      const todos: Todo[] = await response.json();
      return todos;
    } catch (error) {
      console.error("Error fetching todos:", error);
      return [];
    }
    };

  export const getTodo = async (id: string) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch todo");
      }

      const todo: Todo = await response.json();
      return todo;
    } catch (error) {
      console.error("Error fetching todo:", error);
      return null;
    }
    };