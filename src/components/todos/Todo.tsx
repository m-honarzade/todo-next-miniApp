import React from "react";
import ChangeTodo from "./ChangeTodo";
import { todoProps } from "@/types";

const Todo = ({ todo }: { todo: todoProps }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-slate-600 rounded-2xl px-20 py-4 w-10/12 mx-auto">
      {/* {CHANGE TODO} */}
      <ChangeTodo todo={todo} />
      {/* {DELETE TODO} */}
      {/* {EDIT TODO} */}
    </div>
  );
};

export default Todo;
