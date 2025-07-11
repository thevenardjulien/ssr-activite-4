import { Metadata } from "next";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { Eye } from "@deemlol/next-icons";
import { getTodos } from "@/utils/todos";
import { Todos } from "@/types/todos";


export const metadata: Metadata = {
  title: "Todo List",
  description: "Todo List",
};

export default async function Home() {

  const todos: Todos = await getTodos();
  
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <ul className="list-disc flex flex-col gap-4">
        {todos && todos.map((todo) => (
          <li className="flex items-center gap-4" key={todo && todo.id}>
            <p>{todo && todo.title}</p>
            <div className="flex gap-2 items-center">
              <Link href={`/tasks/task/${todo && todo.id}`}>
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
    </MainLayout>
  );
}
