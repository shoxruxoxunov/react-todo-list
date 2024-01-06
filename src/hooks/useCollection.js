import { useEffect, useState } from "react";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useCollection(col, _q) {
  const [documents, setDocument] = useState(null);

  const q = query(collection(db, col), where(..._q));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
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
