import { todoProps } from "@/types";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { FaTrash } from "react-icons/fa";
import * as actions from "@/actions";

const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.deleteTodo}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        type="submit"
        actionButton
        bgColor="bg-red-400"
        text={<FaTrash />}
      />
    </Form>
  );
};

export default DeleteTodo;
