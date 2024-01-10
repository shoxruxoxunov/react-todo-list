import { toast } from "react-toastify";
// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Recipe from "./components/Recipe";

// context
import { useGlobalContext } from "./hooks/useGlobalContext";
// layout
import RootLayout from "./layout/RootLayout";
// componentes

// firebase
import { onAuthStateChanged } from "firebase/auth";

// router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom/dist";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import Create from "./pages/Create";

function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "create",
          element: <Create />,
        },
        {
          path: "/recipe/:id",
          element: <Recipe />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", paylaod: user });
      dispatch({ type: "IS_AUTH_READY" });
    });
  }, []);
  return isAuthReady && <RouterProvider router={routes} />;
}

export default App;
