import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../fetures/todo/todoSlice';


// // const Todos = () => {
// //   const todos = useSelector(state => state.todos);
// //   const dispatch = useDispatch();

// //   return (
// //     <div className='mx-auto my-4 max-w-md p-4 bg-purple-100 rounded-lg shadow-lg'>
// //       <center className='text-center text-2xl mb-4 text-purple-700 font-bold'><h2>Todos</h2></center>
// //       <ul className='border border-purple-300 rounded-md overflow-hidden'>
// //         {todos.map((todo) => (
// //           <li key={todo.id} className='flex items-center justify-between px-4 py-2 bg-purple-200 border-b border-purple-300 last:border-b-0'>
// //             <span className="text-gray-700">{todo.text}</span>
// //             <button className='flex-shrink-0 bg-red-500 hover:bg-red-700 text-sm text-white py-1 px-2 rounded' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Todos;





const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div className='my-4 mx-auto max-w-md p-4 bg-purple-100 rounded-lg shadow-lg overflow-y-auto max-h-96'>
      <center className='text-center text-2xl mb-4 text-purple-700 font-bold'><h2>Todos</h2></center>
      <ul className='border border-purple-300 rounded-md overflow-hidden'>
        {todos.map((todo) => (
          <li key={todo.id} className='flex items-center justify-between px-4 py-2 bg-purple-200 border-b border-purple-300 last:border-b-0'>
            <span className="text-gray-700">{todo.text}</span>
            <button className='flex-shrink-0 bg-red-500 hover:bg-red-700 text-sm text-white py-1 px-2 rounded' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;



