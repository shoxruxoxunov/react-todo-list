import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// tostify liblary
// context
import { GlobalContextProvider } from "./context/GlobalContext.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    <ToastContainer />
  </>,
);
