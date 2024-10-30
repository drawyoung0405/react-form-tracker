import React from 'react'

function TodoFilter() {
    return (
        <>
        <div className='flex items-center mt-6'>
            <h1 className='mr-10'>Filter: </h1>
            <button type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 duration-300 ease-linear">
                All
            </button>
            <button type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 duration-300 ease-linear">
                Open
            </button>
            <button type="button"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 
                        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 duration-300 ease-linear">
                Close
            </button>
        </div>
        <div className='flex mt-6'>
            <h1 className='mr-10'>Order By:</h1>
            <select
                className="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                name="filterStatus"
                id="filterStatus"
            >
                <option value="">Filter by Status</option>
                <option value="new">New</option>
                <option value="open">Open</option>
                <option value="close">Close</option>
            </select>
        </div>
        </>
    )
}

export default TodoFilter
