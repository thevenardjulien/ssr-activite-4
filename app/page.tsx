import { Todo } from "@/types/todos";
import { Metadata } from "next";
import TodoList from "@/components/TodoList";
import MainLayout from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "Todo List",
  description: "Todo List",
}

export default async function Home() {

  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const todos : Todo[] = await response.json();
  return (
      <MainLayout>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        <TodoList todos={todos} />
      </MainLayout>
  );
}