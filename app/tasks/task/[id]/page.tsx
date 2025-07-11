import MainLayout from "@/components/MainLayout";
import { Todo } from "@/types/todos";
import Link from "next/link";
import type { Metadata } from "next";
import { getTodo } from "@/utils/todos";

type Props = {
    params: Promise<{ id: string }>
  }

  export async function generateMetadata(
    { params }: Props,
  ): Promise<Metadata> {
    const { id } = await params
    const task: Todo = await getTodo(id);
    if(task) {
        return {
            title: task.title,
            description: task.title,
        }
    } 
    return {
        title: "Task not found",
        description: "Task not found",
    }
  }

export default async function TaskPage({ params }: Props) {

    const { id } = await params
    const task: Todo = await getTodo(id);

    return (
        <MainLayout>  
            <div className="flex flex-col gap-10">
                <h1>Task : {task && task.title}</h1>
                <div className="flex flex-col">
                        <p>Status : {task && task.completed ? "Completed" : "Not completed"}</p>
                        <p>User ID : {task && task.userId}</p>
                        <p>ID : {task && task.id}</p>
                    </div>
            </div>
            <Link href="/">Back to tasks</Link>
        </MainLayout>
    )
}