// "use client";
// import React, { useState } from "react";
// import EditBtn from "@/components/Edit-btn/Edit-Btn";
// import DeleteBtn from "@/components/Delete-Btn/Delete-Btn";

// export default function Todos() {
//   const [todos, setTodo] = useState([]);

//   const fetchTodo = async () => {
//     const res = await fetch("http://localhost:3000/api/todo");

//     const Todos: any = await res.json();

//     setTodo(Todos);
//     return Todos;
//   };

//   fetchTodo();

//   return (
//     <>
//       {todos.map((d: any) => {
//         return (
//           <>
//             <div
//               key={d._id}
//               className="flex justify-between items-center border mb-2 bg-gray-200"
//             >
//               <article className=" py-3 pl-3">
//                 <p>{d.todo}</p>
//               </article>
//               <div className="flex">
//                 <EditBtn />
//                 <DeleteBtn />
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// }

import EditBtn from "@/components/Edit-btn/Edit-Btn";
import DeleteBtn from "@/components/Delete-Btn/Delete-Btn";
import { connectDB } from "@/lib/mongodb/config/connectDB";
import Todo from "@/lib/mongodb/models/todo-Schema";

interface ITodo {
  _id: any;
  todo: string;
}

const GetTodo = async () => {
  try {
    await connectDB();

    const todos: ITodo[] = await Todo.find();

    return todos;
  } catch (error) {
    console.log(error);
  }
};

export default async function Todos() {
  const todo: any = await GetTodo();

  return (
    <>
      {todo.map((d: ITodo) => {
        return (
          <>
            <div
              key={d._id}
              className="flex justify-between items-center border mb-2 bg-gray-200"
            >
              <article className=" py-3 pl-3">
                <p>{d.todo}</p>
              </article>
              <div className="flex">
                <EditBtn todoId={d._id} todoData={d.todo} />

                <DeleteBtn todoId={d._id} />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
