export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}  | null;

export type Todos = Todo[] | [];