// components/TaskCard.tsx
"use client";

import { Task } from "@/types/task";

type Props = {
    task: Task;
    onToggle: (id: string) => void;
};

export const TaskCard = ({ task, onToggle }: Props) => {
    return (
        <div className="flex items-center gap-3 p-4 border rounded-xl bg-white shadow-sm">
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => onToggle(task.id)}
            />
            <div>
                <h4 className="font-medium text-black text-xl">{task.title}</h4>
                {
                    task.description && (
                        <div className="text-sm text-gray-500 mt-1 whitespace-pre-wrap">
                            {task.description.split("\n").map((line, idx) => {
                                // Add 4 non-breaking spaces before lines starting with "-"
                                const formattedLine = line.trim().startsWith("-")
                                    ? "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0" + line.trim()
                                    : line.trim();

                                return <div key={idx}>{formattedLine}</div>;
                            })}
                        </div>
                    )}
            </div>
        </div>
    );
};
