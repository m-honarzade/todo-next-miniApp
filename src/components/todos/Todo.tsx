import React from "react";
import ChangeTodo from "./ChangeTodo";
import { todoProps } from "@/types";
import EditTodo from "./EditTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-slate-600 rounded-2xl px-20 py-4 w-10/12 mx-auto">
      {/* {CHANGE TODO} */}
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase grow">{todo.title}</span>
      {/* {EDIT TODO} */}
      <div className="flex items-center mx-2">
        <EditTodo todo={todo} />
      </div>
      <div className="flex items-center "> {/* {DELETE TODO} */}</div>
    </div>
  );
};

export default Todo;
