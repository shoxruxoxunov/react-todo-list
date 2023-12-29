import { useGlobalContext } from "../hooks/useGlobalContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export function useSignup() {
  const { dispatch } = useGlobalContext();

  //   login and password

  // login and gmail with popup
  const signUpWithGoogleProvider = () => {
    dispatch({ type: "IS_PENDING", paylaod: true });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch({ type: "LOGIN", paylaod: user });
        toast.success("welcome");
        dispatch({ type: "IS_PENDING", paylaod: false });
        dispatch({type:"ERROR",paylaod:null})
      })
      .catch((error) => {
        const errorMessge = error.message;
        console.log(error);
        toast.error(error.Message);
        dispatch({ type: "IS_PENDING", paylaod: false });
      });
    dispatch({ type: "Error", paylaod: errorMessge });
  };
  return { signUpWithGoogleProvider };
}
