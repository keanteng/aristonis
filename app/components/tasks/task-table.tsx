import { tempTasks } from "@/app/library/data/temp-tasks"

export default function TaskTable() {
    const tasks = tempTasks;

    return (
        <main className="flex flex-col py-2 rounded-lg max-w-full gap-2">
            <div className="overflow-x-auto rounded-md border">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Assigned</th>
                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Points</th>
                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {tasks.map((task) => (
                            <tr key={task.id} className="hover:bg-gray-50 hover:text-black">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{task.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{task.assigned}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{task.point}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{task.status}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="px-2 py-1 text-blue-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}