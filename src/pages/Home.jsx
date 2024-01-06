import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useCollection } from "../hooks/useCollection";
import TodoList from "../components/TodoList";

function Home() {
  const { user, dispatch } = useContext(GlobalContext);
  const { documents: todos } = useCollection("todos", ["uid", "==", user.uid]);
  return <div>{todos && <TodoList todos={todos} />}</div>;
}

export default Home;
