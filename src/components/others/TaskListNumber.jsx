import React from 'react'

const TaskListNumber = ({data}) => {


    return (
        <div className="bg-black  text-green-400 font-mono ">
            <div className="flex flex-wrap gap-6 justify-center">
                {/* Repeat this card 4 times */}
                <div className="bg-black text-green-400 font-mono p-4 border border-green-500 rounded-lg w-40 shadow-md">
                    <div>
                        <h2 className="text-3xl text-green-300 font-bold text-center">{data.task_count.new_task}</h2>
                        <h3 className="text-center mt-2 text-green-400">New Task</h3>
                    </div>
                </div>

                <div className="bg-black text-green-400 font-mono p-4 border border-green-500 rounded-lg w-40 shadow-md">
                    <div>
                        <h2 className="text-3xl text-green-300 font-bold text-center">{data.task_count.active}</h2>
                        <h3 className="text-center mt-2 text-green-400">In Progress</h3>
                    </div>
                </div>

                <div className="bg-black text-green-400 font-mono p-4 border border-green-500 rounded-lg w-40 shadow-md">
                    <div>
                        <h2 className="text-3xl text-green-300 font-bold text-center">{data.task_count.completed}</h2>
                        <h3 className="text-center mt-2 text-green-400">Completed</h3>
                    </div>
                </div>

                <div className="bg-black text-green-400 font-mono p-4 border border-green-500 rounded-lg w-40 shadow-md">
                    <div>
                        <h2 className="text-3xl text-green-300 font-bold text-center">{data.task_count.failed}</h2>
                        <h3 className="text-center mt-2 text-green-400">Backlog</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TaskListNumber