"use client";

import { Todo } from "@/types/todos";
import { useState } from "react";
import { Eye, Trash2 } from "@deemlol/next-icons";
import Link from "next/link";

export default function TodoList({ todos }: { todos: Todo[] }) {
  const [todoList, setTodoList] = useState<Todo[]>(todos);

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="list-disc flex flex-col gap-4">
      {todoList.map((todo) => (
        <li className="flex items-center gap-4" key={todo.id}>
          <p>{todo.title}</p>
          <div className="flex gap-2 items-center">
            <Link href={`/tasks/task/${todo.id}`}>
              <Eye
                size={24}
                color={`var(--color-neutral-700)`}
                className="transition-all duration-300 hover:scale-105 hover:cursor-pointer"
              />
            </Link>
            <button
              className="rounded-md text-white px-2 py-1  transition-all duration-300 hover:scale-105 hover:cursor-pointer"
              onClick={() => handleDelete(todo.id)}
            >
              <Trash2 size={24} color={`var(--color-neutral-700)`} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
