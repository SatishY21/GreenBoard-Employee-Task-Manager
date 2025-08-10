import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

      const [userdata,setuserData] = useContext(AuthContext)


    const [title, setTaskTitle] = useState('')
    const [description, setTaskDescription] = useState('')
    const [date, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})


    const submitHandler = (e) => {
        e.preventDefault()


        setNewTask({ title, description, date, asignTo, category, active: false, newTask: true, failed: false, completed: false })

        const data = userdata
        // console.log(userdata.employees)

        console.log(data);

        data.forEach(function (elem) {
            if (asignTo == elem.first_name) {
                elem.tasks.push(newTask)
                elem.task_count.new_task = elem.task_count.new_task + 1
            }
        })

        setuserData(data)

        // localStorage.setItem('employees',JSON.stringify(data))

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAsignTo('')
        setCategory('')


        // console.log(task)
    }


    return (
        <div className="w-full px-4">
            {/* Task Creation Form */}
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>
                <div className="bg-black text-green-400 font-mono border border-green-500 rounded-lg p-6 shadow-md mt-6 ml-4 mr-4">
                    <div className="flex flex-col md:flex-row gap-6">

                        {/* Left Column - Inputs stacked vertically */}
                        <div className="flex flex-col space-y-4 w-full md:w-1/2">
                            <div>
                                <label className="text-green-300 block mb-1">Task Title</label>
                                <input
                                    value={title}
                                    onChange={(e) => {
                                        setTaskTitle(e.target.value)
                                    }}
                                    type="text"
                                    className="w-full px-3 py-2 rounded bg-gray-900 text-green-200 border border-green-500"
                                    placeholder="Enter task title"
                                />
                            </div>

                            <div>
                                <label className="text-green-300 block mb-1">Date</label>
                                <input
                                    value={date}
                                    onChange={(e) => {
                                        setTaskDate(e.target.value)
                                    }}
                                    type="date"
                                    className="w-full px-3 py-2 rounded bg-gray-900 text-green-200 border border-green-500"
                                />
                            </div>

                            <div>
                                <label className="text-green-300 block mb-1">Assigned To</label>
                                <input
                                    value={asignTo}
                                    onChange={(e) => {
                                        setAsignTo(e.target.value)
                                    }}
                                    type="text"
                                    className="w-full px-3 py-2 rounded bg-gray-900 text-green-200 border border-green-500"
                                    placeholder="Assign to"
                                />
                            </div>

                            <div>
                                <label className="text-green-300 block mb-1">Category</label>
                                <input
                                    value={category}
                                    onChange={(e) => {
                                        setCategory(e.target.value)
                                    }}
                                    type="text"
                                    className="w-full px-3 py-2 rounded bg-gray-900 text-green-200 border border-green-500"
                                    placeholder="Enter category"
                                />
                            </div>
                        </div>

                        {/* Right Column - Description & Button */}
                        <div className="flex flex-col w-full md:w-1/2">
                            <div className="flex-grow">
                                <label className="text-green-300 block mb-1">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => {
                                        setTaskDescription(e.target.value)
                                    }}
                                    rows="10"
                                    className="w-full px-3 py-2 rounded bg-gray-900 text-green-200 border border-green-500"
                                    placeholder="Enter task description"
                                ></textarea>
                            </div>
                            <div className="mt-4">
                                <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded">
                                    Create Task
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>


    )
}

export default CreateTask