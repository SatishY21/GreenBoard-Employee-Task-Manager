import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {

    // console.log(data)

    return (
        <div id="tasklist" className="w-full h-[] overflow-x-auto mt-8 px-4">
            <div className="flex gap-6 py-4 w-max ml-3">

                {data.tasks.map((elem, idx) => {
                    if(elem.active){
                        return <AcceptTask key={idx} data={elem}/>
                    }
                    if(elem.new_task){
                        return <NewTask key={idx} data={elem}/>
                    }
                      if(elem.completed){
                        return <CompleteTask key={idx} data={elem}/>
                    }
                    if(elem.failed){
                        return <FailedTask key={idx} data={elem}/>
                    }
                    
                })}

                {/* <AcceptTask />
                <NewTask />
                <CompleteTask />
                <FailedTask />
                */}
            </div>
        </div>


    )
}

export default TaskList