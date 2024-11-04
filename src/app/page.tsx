import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import { prisma } from "@/utils/prisma";

export async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="w-full bg-slate-950 h-screen flex flex-col py-20 items-center">
      <header>
        <h1 className="text-white uppercase font-extrabold text-2xl ">
          TODO APP
        </h1>
      </header>
      <main>
        {/* ADD TODOS */}
        <AddTodo />
        {/*MAP DATA */}
        <div className="text-white flex flex-col gap-5 w-full justify-center items-center mt-10">
          {data.map((todo) => (
            <div key={todo.id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
