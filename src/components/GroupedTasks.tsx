'use client';

import { useEffect, useState } from 'react';
import { Task } from '@/types/task';
import { initialTasks } from '@/lib/tasks';
import { TaskCard } from './TaskCard';
import { loadTasks, saveTasks } from '@/utils/storage';
import { ProgressBar } from './ProgressBar';

export const GroupedTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [expandedMonths, setExpandedMonths] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const stored = loadTasks();
        setTasks(stored || initialTasks);
        // Initialize all months as expanded by default
        const initialExpandedState = initialTasks.reduce((acc, task) => {
            acc[task.month] = true;
            return acc;
        }, {} as Record<number, boolean>);
        setExpandedMonths(initialExpandedState);
    }, []);

    const toggleTask = (id: string) => {
        const updated = tasks.map((t) =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
        );
        setTasks(updated);
        saveTasks(updated);
    };

    const toggleMonth = (month: number) => {
        setExpandedMonths(prev => ({
            ...prev,
            [month]: !prev[month]
        }));
    };

    // Group tasks by month and include monthName
    const grouped = tasks.reduce((acc: { 
        [month: number]: {
            tasks: Task[],
            monthName: string
        } 
    }, task) => {
        if (!acc[task.month]) {
            acc[task.month] = {
                tasks: [],
                monthName: task.monthName || `Month ${task.month}`
            };
        }
        acc[task.month].tasks.push(task);
        return acc;
    }, {});

    return (
        <div className="space-y-6">
            {Object.entries(grouped).map(([month, { tasks: monthTasks, monthName }]) => {
                const monthNumber = Number(month);
                const completed = monthTasks.filter((t) => t.isCompleted).length;
                const total = monthTasks.length;
                const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

                return (
                    <div key={month} className="border rounded-lg p-4 shadow-sm bg-white">
                        <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleMonth(monthNumber)}
                        >
                            <div className="flex items-center space-x-3">
                                <h2 className="text-xl font-semibold text-blue-700">
                                    📅 {monthName}
                                </h2>
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                                    {monthTasks[0].monthName ? '' : `Month ${month}`}
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className={`text-sm font-medium ${
                                    progress === 100 ? 'text-green-600' : 'text-gray-600'
                                }`}>
                                    {progress}%
                                </span>
                                <span className="text-sm text-gray-500">
                                    ({completed}/{total})
                                </span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${
                                        expandedMonths[monthNumber] ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-3">
                            <ProgressBar completed={completed} total={total} />
                        </div>

                        {expandedMonths[monthNumber] && (
                            <div className="mt-4 space-y-3">
                                {monthTasks
                                    .sort((a, b) => a.week - b.week)
                                    .map((task) => (
                                        <TaskCard
                                            key={task.id}
                                            task={task}
                                            onToggle={toggleTask}
                                        />
                                    ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};