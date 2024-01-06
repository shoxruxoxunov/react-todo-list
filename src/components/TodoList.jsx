import React from "react";
import { useDeleteDoc } from "../hooks/useDeleteDoc";
function TodoList({ todos }) {
  const { deleteTodo } = useDeleteDoc();
  console.log(todos);
  return (
    <>
      <div className=" w-46 container card mb-[20px] list-none bg-base-100 no-underline shadow-xl md:mb-[20px] md:w-96">
        <div className="card-body">
          {todos.map((todos) => {
            return (
              <li key={todos.id} className="">
                <h3 className="text-sm font-medium md:text-2xl md:font-semibold">
                  {todos.title}
                </h3>
                <p className="text-sm font-light md:text-base md:font-normal">
                  {todos.body}
                </p>
                <p className="text-sm font-light md:text-base md:font-normal">
                  {todos.completed}
                </p>
              </li>
            );
          })}
          <div className="card-actions btn-sm m-auto md:m-auto ">
            <button className="btn btn-outline btn-secondary btn-sm text-xs  font-light md:btn-md md:text-base md:font-medium">
              Buy Now
            </button>
            <div>
              <button
                onClick={() => deleteTodo("todos", todos.id)}
                className="btn btn-warning  btn-sm text-xs  font-light md:btn-md md:text-base md:font-medium"
              >
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
