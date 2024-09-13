import TaskTable from "@/app/components/tasks/task-table"

export default function Tasks() {
    return (
        <main>
            <div className="flex flex-col gap-1 px-3 rounded-lg py-5 lg:mx-12 xl:mx-80">
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-3xl font-semibold">Tasks</h1>
                    <p className="text-sm text-neutral-500">Manage your tasks here</p>
                </div>
                <div className="mt-4">
                    <TaskTable />
                </div>
            </div>
        </main>
    )
}