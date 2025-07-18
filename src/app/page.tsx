"use client";
import { GroupedTasks } from "@/components/GroupedTasks";

export default function Home() {
    
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">🎓 Thesis Progress Tracker</h1>
            <GroupedTasks />
        </div>
    );
}
