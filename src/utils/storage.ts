import { Task } from "@/types/task";

// utils/storage.ts
export const loadTasks = () => {
    const data = localStorage.getItem("thesis_tasks");
    return data ? JSON.parse(data) : null;
};

export const saveTasks = (tasks: Task[]) => {
    localStorage.setItem("thesis_tasks", JSON.stringify(tasks));
};
