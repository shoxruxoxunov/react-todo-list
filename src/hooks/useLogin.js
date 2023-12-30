import { useGlobalContext } from "./useGlobalContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export function useLogin() {
  const { dispatch } = useGlobalContext();

  //   login and password
  const login = (email, password) => {
    console.log(email, password);
    dispatch({ type: "IS_PENDING", error: true });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("welcome come back !");
        dispatch({ type: "LOGIN", paylaod: userCredential.user });
        dispatch({ type: "ERROR", error: null });
        dispatch({ type: "IS_PENDING", error: false });
      })
      .catch((error) => {
        const errorMessge = error.message;
        console.log(error);
        toast.error(error.Message);
        dispatch({ type: "ERROR", error: error.message });
        dispatch({ type: "IS_PENDING", error: false });
      });
  };

  return { login };
}
