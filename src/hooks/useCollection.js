import { useEffect, useState } from "react";
import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useCollection() {
  const [document, setDocument] = useState();
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), () => {});
    return () => unsubscribe();
  }, []);
}
