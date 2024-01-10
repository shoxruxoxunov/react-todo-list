import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export function useGetDocument() {
  const getDocument = async (col, id) => {
    const docRef = doc(db, col, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return "document data", docSnap.data();
    } else {
      return "no such document";
    }
  };

  return { getDocument };
}
