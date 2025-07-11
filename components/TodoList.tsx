import { Todo } from "@/types/todos";
import { Eye } from "@deemlol/next-icons";
import Link from "next/link";

export default function TodoList({ todos }: { todos: Todo[] }) {

  return (
    <ul className="list-disc flex flex-col gap-4">
      {todos.map((todo) => (
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
          </div>
        </li>
      ))}
    </ul>
  );
}
