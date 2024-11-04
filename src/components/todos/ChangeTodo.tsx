import { FaCheck } from "react-icons/fa";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import * as actions from "@/actions";
import { todoProps } from "@/types";

const ChangeTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        text={<FaCheck />}
        actionButton
        type="submit"
        bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}
      />
    </Form>
  );
};

export default ChangeTodo;
