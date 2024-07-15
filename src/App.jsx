// import React from "react";
// import AddTodo from "./components/AddTodo";
// import Todos from "./components/Todos";
// import './styles/tailwind.css';


// function App() {

//   return (
//     <div>
//       <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
//         <center><h2 className="text-3xl font-bold text-gray-800 mb-4">Redux Todo App</h2></center>
//         <AddTodo />
//         <Todos />

//       </div>

//       <footer>
//         Deloped by Jenish Patel

//       </footer>

//     </div>

//   );
// }

// export default App;

import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./styles/tailwind.css";

function App() {
  return (
    <div className=" flex flex-col justify-between bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg flex-1">
        <center>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Redux Todo App</h2>
        </center>
        <AddTodo />
        <Todos />
      </div>
      <footer className="text-white text-xs text-right p-4 fixed bottom-0 right-0">
        Developed by Jenish Patel
      </footer>
    </div>
  );
}

export default App;
