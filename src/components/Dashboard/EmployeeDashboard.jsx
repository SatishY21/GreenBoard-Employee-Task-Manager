import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

    // console.log(data.id)
    return (
        <div className="h-screen w-screen bg-black text-green-400 font-mono flex flex-col">
            <Header changeUser = {props.changeUser} data={props.data} />

            <div className="flex p-6 justify-center">
                <TaskListNumber data={props.data} />
            </div>
            
            <TaskList data={props.data} />

        </div>

    )
}

export default EmployeeDashboard