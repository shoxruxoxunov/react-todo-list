import React from "react";
import { useDeleteDoc } from "../hooks/useDeleteDoc";
function TodoList({ todos }) {
  const { deleteTodo } = useDeleteDoc();
  console.log(todos);
  return (
    <>
      <div className="container mb-5 grid w-full grid-cols-1 gap-2 md:grid md:grid-cols-3 md:gap-4">
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="card  w-full bg-base-100 shadow-xl">
              <figure className="px-5 pt-5 md:px-10 md:pt-10">
                <img
                  className=" h-[200px] w-[300px] rounded-sm md:h-[200px] md:w-[300px]  md:rounded-xl "
                  src={todo.images}
                  alt="shoes"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="text-sm font-medium md:text-2xl md:font-semibold">
                  {todo.title}
                </h3>
                <p className="text-sm font-light md:text-base md:font-normal">
                  {todo.cookingTime}
                </p>
                <p className="line-clamp-3 md:line-clamp-5 text-sm font-light md:text-base md:font-normal ">
                  {todo.method}
                </p>
                <div className="card-actions btn-sm m-auto md:m-auto ">
                  <button className="btn btn-outline btn-secondary btn-sm text-xs  font-light md:btn-md md:text-base md:font-medium  ">
                    Read More
                  </button>
                  <div>
                    <button
                      onClick={() => deleteTodo("todos", todo.id)}
                      className="btn btn-warning  btn-sm text-xs  font-light md:btn-md md:text-base md:font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
