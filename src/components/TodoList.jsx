import React from "react";
import { useDeleteDoc } from "../hooks/useDeleteDoc";
function TodoList({ todos }) {
  const { deleteTodo } = useDeleteDoc();
  console.log(todos);
  return (
    <>
      <div className=" w-46 container card mb-[20px] list-none bg-base-100 no-underline shadow-xl md:mb-[20px] md:w-96">
        <div className="card-body">
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="">
                <h3 className="text-sm font-medium md:text-2xl md:font-semibold">
                  {todo.title}
                </h3>
                <p className="text-sm font-light md:text-base md:font-normal">
                  {todo.body}
                </p>
                <p className="text-sm font-light md:text-base md:font-normal">
                  {todo.completed}
                </p>
                <div className="card-actions btn-sm m-auto md:m-auto ">
                  <button className="btn btn-outline btn-secondary btn-sm text-xs  font-light md:btn-md md:text-base md:font-medium">
                    Buy Now
                  </button>
                  <div>
                    <button
                      onClick={() => deleteTodo("todos", todo.id)}
                      className="btn btn-warning  btn-sm text-xs  font-light md:btn-md md:text-base md:font-medium"
                    >
                      delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TodoList;
