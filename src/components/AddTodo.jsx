import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../fetures/todo/todoSlice';



const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <div className='my-4 mx-auto max-w-md p-4 bg-green-100 rounded-lg shadow-lg'>
            <form onSubmit={addTodoHandler} className='flex items-center border-b border-b-2 border-blue-500 py-2'>
                <input
                    type='text'
                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    placeholder='Enter a Todo...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type='submit'
                    className='flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
