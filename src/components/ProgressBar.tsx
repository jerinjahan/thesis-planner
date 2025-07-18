// components/ProgressBar.tsx
type Props = {
    completed: number;
    total: number;
};

export const ProgressBar = ({ completed, total }: Props) => {
    const percent = Math.round((completed / total) * 100);
    return (
        <div className="w-full bg-gray-200 h-4 rounded-full">
            <div
                className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                style={{ width: `${percent}%` }}
            />
        </div>
    );
};
