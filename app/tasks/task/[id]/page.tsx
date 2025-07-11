import MainLayout from "@/components/MainLayout";
import { Todo } from "@/types/todos";
import Link from "next/link";
import type { Metadata } from "next";
import { getOneTodo } from "@/utils/todos";

type Props = {
    params: Promise<{ id: string }>
  }

  export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    const { id } = await params
    const task: Todo = await getOneTodo(id);
    return {
        title: task.title,
        description: task.title,
    }
  }

export default async function TaskPage({ params }: Props) {

    const { id } = await params
    const task: Todo = await getOneTodo(id);

    return (
        <MainLayout>  
            <div className="flex flex-col gap-10">
                <h1>Task : {task.title}</h1>
                <div className="flex flex-col">
                        <p>Status : {task.completed ? "Completed" : "Not completed"}</p>
                        <p>User ID : {task.userId}</p>
                        <p>ID : {task.id}</p>
                    </div>
            </div>
            <Link href="/">Back to tasks</Link>
        </MainLayout>
    )
}