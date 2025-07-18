export type Task = {
    id: string;
    title: string;
    description?: string;
    isCompleted: boolean;
    week: number;
    month: number;
    monthName: string;
};