import { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useCollection() {
  const [documents, setDocument] = useState(null);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const resulst = [];
      snapshot.docs.forEach((doc) => {
        const todo = { id: doc.id, ...doc.data() };
        resulst.push(todo);
      });
      setDocument(resulst);
    });
    return () => unsubscribe();
  }, []);
  return { documents };
}
