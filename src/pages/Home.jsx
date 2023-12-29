import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Home() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div className="container">
      <h1>home</h1>
    </div>
  );
}

export default Home;
