import { toast } from "react-toastify";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function useDeleteDoc() {
  const deleteTodo = async (col, id) => {
    await deleteDoc(doc(db, col, id));
    toast.warning("delete todos");
  };
  return { deleteTodo };
}
export { useDeleteDoc };
