import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userdata,setuserData] = useContext(AuthContext)

    // console.log(authData.employees)

    return (
        <div className="w-full px-4">
            <div className="w-full px-4 mt-4">
                <div className="flex bg-gray-900 border border-green-600 rounded-md shadow-md text-green-300 font-mono font-bold uppercase text-sm">

                    <h2 className="w-1/5 text-center py-3 bg-green-300 border-r border-green-700 text-green-900">Employee Name</h2>
                    <h2 className="w-1/5 text-center py-3 bg-green-300 border-r border-green-700  text-green-900">New Task</h2>
                    <h2 className="w-1/5 text-center py-3 bg-green-300 border-r border-green-700  text-green-900">Active Task</h2>
                    <h2 className="w-1/5 text-center py-3 bg-green-300 border-r border-green-700  text-green-900">Completed</h2>
                    <h2 className="w-1/5 text-center py-3 bg-green-300  text-green-900">Failed</h2>

                </div>
            </div>


            <div className='h-[80%] overflow-auto'>


                {userdata.map(function (elem,idx) {
                    return <div key={idx} className="w-full px-4 mt-4">
                        <div className="flex bg-black border border-green-500 rounded-lg shadow-md text-green-300 font-mono">

                            <h2 className="w-1/5 text-center py-2 bg-green-900 border-r border-green-600">{elem.first_name}</h2>
                            <h2 className="w-1/5 text-center py-2 bg-green-900 border-r border-green-600">{elem.task_count.new_task}</h2>
                            <h2 className="w-1/5 text-center py-2 bg-green-900 border-r border-green-600">{elem.task_count.active}</h2>
                            <h2 className="w-1/5 text-center py-2 bg-green-900 border-r border-green-600">{elem.task_count.completed}</h2>
                            <h2 className="w-1/5 text-center py-2 bg-green-900  border-red-600">{elem.task_count.failed}</h2>

                        </div>
                    </div>
                })}

            </div>


        </div>




    )
}
<div>
    <div>
        <h2 className='w-1/5 bg-green-800'>Employee Name</h2>
        <h2 className='w-1/5 bg-green-800'>New Task</h2>
        <h2 className='w-1/5 bg-green-800'>Active Task</h2>
        <h2 className='w-1/5 bg-green-800'>Completed</h2>
        <h2 className='w-1/5 bg-green-800'>Failed</h2>
    </div>
</div>

export default AllTask