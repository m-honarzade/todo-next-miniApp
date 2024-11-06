"use client";

import { useState } from "react";
import Button from "../button/Button";
import { MdEdit } from "react-icons/md";
import Form from "../form/Form";
import Input from "../input/Input";
import { todoProps } from "@/types";
import * as actions from "@/actions";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodo, setEditTodo] = useState(false);
  const handelEdit = () => {
    if (todo.isCompleted) {
      return;
    }
    setEditTodo((prevState) => !prevState);
  };
  const submitHandler = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex flex-row justify-center items-center">
      {!editTodo && <Button text={<MdEdit />} onClick={handelEdit} />}
      {editTodo && (
        <Form action={actions.editTodo} onSubmit={submitHandler}>
          <Input type="hidden" name="inputId" value={todo.id} />
          <div className="flex justify-center">
            <Input
              type="text"
              name="newTitle"
              placeholder="New Title here...."
            />
            <Button type="submit" text="save" />
          </div>
        </Form>
      )}
    </div>
  );
};

export default EditTodo;
