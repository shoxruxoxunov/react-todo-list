import { useGlobalContext } from "./hooks/useGlobalContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export function useLogin() {
  const { dispatch } = useGlobalContext();

//   login and password

// login and gmail with popup
}
