import React from 'react';
import { FaTimes } from 'react-icons/fa';

const InputData = ({inputDiv,setInputDiv}) => {
    return (
        <>
            <div className={`${inputDiv} fixed top-0 left-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 h-full w-full opacity-50`}> </div>
            <div className={`${inputDiv} fixed top-0 left-0 h-full w-full flex justify-center items-center `} >
                <div className='relative bg-gray-900 h-auto w-[600px] rounded-lg p-8 shadow-lg text-gray-100'>
                    <button onClick={()=>setInputDiv("hidden")} className='absolute top-4 right-4 text-gray-300 hover:text-gray-100'>
                        <FaTimes size={24} />
                    </button>
                    <h2 className='text-3xl font-bold text-center mb-6'>Add New Task</h2>
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor="title" className='block text-gray-400 mb-2'>Title</label>
                            <input
                                type="text"
                                id="title"
                                className='w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                                placeholder="Enter task title"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className='block text-gray-400 mb-2'>Description</label>
                            <textarea
                                id="description"
                                className='w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                                rows="5"
                                placeholder="Enter task description"
                            ></textarea>
                        </div>
                        <div className='flex justify-end space-x-4'>
                            <button type="reset" className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md'>Cancel</button>
                            <button type="submit" className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default InputData;

