import React from "react";

function TodoList({ todos }) {
  console.log(todos);
  return (
    <>
      <ul>
        {todos.map((todos) => {
          return (
            <li>
              <h3>{todos.title}</h3>
              <h3>{todos.body}</h3>
              <p>{todos.completed}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
