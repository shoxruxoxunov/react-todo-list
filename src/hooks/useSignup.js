import { useGlobalContext } from "../hooks/useGlobalContext";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export function useSignup() {
  const { dispatch } = useGlobalContext();

  //   login and password
  const signup = (displayName, email, password,photoURl) => {
    console.log(displayName, email, password);
    dispatch({ type: "IS_PENDING", error: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL:photoURl
        });
        toast.success("welcome !");
        dispatch({ type: "LOGIN", paylaod: userCredential.user });
        dispatch({ type: "ERROR", error: null });
        dispatch({ type: "IS_PENDING", error: false });
      })
      .catch((error) => {
        const match = error.message.match(/\/([^)]+)/);
        if (match) {
          const extracted_text = match[1];
          console.log(extracted_text);
          toast.error(extracted_text);
        }
        dispatch({ type: "IS_PENDING", error: false });
        dispatch({ type: "ERROR", error: error.message });
      });
  };
  // login and gmail with popup
  const signUpWithGoogleProvider = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch({ type: "LOGIN", paylaod: user });
        dispatch({ type: "IS_PENDING", paylaod: false });
        toast.success("welcome");
        dispatch({ type: "ERROR", paylaod: null });
        dispatch({ type: "IS_PENDING", paylaod: false });
      })
      .catch((error) => {
        const errorMessge = error.message;
        console.log(error);
        toast.error(error.Message);
        dispatch({ type: "IS_PENDING", paylaod: false });
        dispatch({ type: "Error", paylaod: errorMessge });
      });
  };
  return { signUpWithGoogleProvider, signup };
}
