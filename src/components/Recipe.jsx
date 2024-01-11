import { Link, useParams } from "react-router-dom";
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
      {document && (
        <>
          <div className="container w-full mt-[200px] md:flex md:h-screen md:place-items-center md:justify-center">
            <div className="carousel carousel-center h-[250px] max-w-md space-x-4 rounded-box bg-neutral object-fill p-4 md:h-[500px] md:w-[500px]">
              {document.image.map((img) => {
                return (
                  <div className="carousel-item">
                    <img src={img} className="rounded-box object-cover " />
                  </div>
                );
              })}
            </div>

            <div className="card w-full bg-base-100 shadow-xl md:h-[500px]">
              <div className="card-body">
                <h1 className="card-title text-base font-normal md:mb-4 md:text-5xl md:font-extrabold">
                  {document.title}
                </h1>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-normal md:mb-3 md:text-3xl md:font-semibold">
                    Ingridients:
                  </h2>
                  {document.ingridient.map((ing) => {
                    return (
                      <div className="flex">
                        <p className="line-clamp-1 text-sm font-light md:line-clamp-3 md:text-lg md:font-medium">
                          {ing}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="md:mb-3">
                  <h2 className=" text-base font-normal md:mb-3 md:text-3xl md:font-semibold">
                    Method:
                  </h2>
                  <p className="line-clamp-3 text-sm font-light md:line-clamp-6 md:text-lg md:font-medium">
                    {document.method}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <h2 className="text-base font-normal md:mb-3 md:text-3xl md:font-semibold">
                    Cooking time:
                  </h2>
                  <span className="line-clamp-3 text-sm font-light md:line-clamp-6 md:text-lg md:font-medium">
                    {document.cookingTime + ""}
                  </span>
                </div>

                <div className="card-actions justify-end md:mt-[-60px]">
                  <Link
                    to="/"
                    className="btn btn-outline btn-secondary btn-sm text-xs  font-thin md:btn-md md:text-base md:font-medium"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Recipe;
