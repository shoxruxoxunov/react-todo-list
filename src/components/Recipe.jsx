import { useParams } from "react-router-dom";
import { useGetDocument } from "../hooks/useGetDocument";
import { useState } from "react";

function Recipe() {
  const { id } = useParams();
  const { getDocument } = useGetDocument();
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  getDocument("todos", id)
    .then((data) => setDocument(data))
    .catch((error) => setError(error));

  return (
    <div>
       <h1>recipe</h1>
      {document && (
        <>
          <h2>{document.title}</h2>
        </>
      )}
    </div>
  );
}

export default Recipe;
