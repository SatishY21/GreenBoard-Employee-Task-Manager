import React from 'react'

const AcceptTask = ({data}) => {
    // console.log(data.title)
    return (
        <div className="flex-shrink-0 w-[280px] h-[240px] bg-green-900 text-green-300 rounded-xl shadow-md p-4">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h2>{data.date}</h2>
            </div>

            <h2 className='mt-5 text-xl text-green-100'>{data.title}</h2>
            <p className='mt-2 text-sm'>
                {data.description}
            </p>

            <div className='flex justify-between mt-2 gap-3'>
                <button className='bg-green-600 hover:bg-green-500 text-green-100 px-3 py-1 text-xs rounded shadow'>
                    Mark as Completed
                </button>
                <button className='bg-red-700 hover:bg-red-600 text-red-100 px-3 py-1 text-xs rounded shadow'>
                    Mark as Failed
                </button>
            </div>
        </div>


    )
}

export default AcceptTask