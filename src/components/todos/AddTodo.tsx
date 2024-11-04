import { createTodo } from "@/actions";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";

const AddTodo = () => {
  return (
    <Form action={createTodo}>
      <div className="flex flex-row gap-4">
        <Input name="input" type="text" placeholder="Add Todo Here..." />
        <Button type="submit" text="Add" bgColor="bg-blue-600" />
      </div>
    </Form>
  );
};

export default AddTodo;
