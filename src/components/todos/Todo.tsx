import React from "react";
import ChangeTodo from "./ChangeTodo";
import { todoProps } from "@/types";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted ? "line-through" : "",
    opacity: todo.isCompleted ? 0.5 : 1,
  };
  return (
    <div
      style={todoStyle}
      className="flex flex-row justify-between items-center bg-slate-600 rounded-2xl px-5 md:px-20 py-4 w-10/12 mx-auto"
    >
      {/* {CHANGE TODO} */}
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase grow">{todo.title}</span>
      {/* {EDIT TODO} */}
      <div className="flex items-center mx-2">
        <EditTodo todo={todo} />
      </div>
      {/* {DELETE TODO} */}
      <div className="flex items-center ">
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
