import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useCollection } from "../hooks/useCollection";
import TodoList from "../components/TodoList";

function Home() {
  const { dispatch } = useContext(GlobalContext);
  const { documents: todos } = useCollection();
  return <div>{todos && <TodoList todos={todos} />}</div>;
}

export default Home;
