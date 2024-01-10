import { useEffect, useRef, useState } from "react";
import { useAddNewDoc } from "../hooks/useAddNewDoc";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useGlobalContext } from "../hooks/useGlobalContext";
// --------------------------------------------------------------
function Create() {
  const { user } = useGlobalContext();
  console.log(user.uid);
  const navigate = useNavigate();
  console.log(navigate);
  const { addNewDoc, isPending, newTodo } = useAddNewDoc();
  const title = useRef();
  // const time = useRef();
  const method = useRef();
  const ingredients = useRef();
  const images = useRef();
  console.log(images);
  const cookingTime = useRef();

  const [image, setImage] = useState([]);
  const [ingridient, setIngridient] = useState([]);
  // -------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    addNewDoc("todos", {
      title: title.current.value,
      // time: time.current.value,
      method: method.current.value,
      ingredients: ingredients.current.value,
      images: images.current.value,
      cookingTime: cookingTime.current.value + "minutes",
      uid: user.uid,
      ingridient,
      image,
    });
  };
  // -------------------------------------------------------
  // ---------------------------------------------------------
  useEffect(() => {
    if (!isPending && newTodo) {
      navigate("/");
    }
  }, [isPending, newTodo]);
  // -----------------------------------------
  const handlePrivew = (e) => {
    e.preventDefault();
  };
  // handleAdd---------------------------
  const handleAddIngridient = (e) => {
    e.preventDefault();
    let newIng = ingredients.current.value.trim();
    if (!ingridient.includes(newIng)) {
      setIngridient((prev) => {
        return [...prev, newIng];
      });
    }

    ingredients.current.value = "";
  };
  // -------------------------------------

  // handleAddImage-------------------------------------
  const handleAddImage = (e) => {
    e.preventDefault();
    const imageUrlRegax = /\.(jpeg|jpg|gif|png|svg|JPEG|JPG|GIF|PNG|SVG)$/;
    let newImage = images.current.value.trim();
    if (imageUrlRegax.test(newImage)) {
      setImage((prev) => {
        return [...prev, newImage];
      });
    }
    images.current.value = "";
  };

  // ---------------------------------------------------

  return (
    <div className="container mb-5">
      <h1 className="my-10 text-center text-lg font-light md:text-4xl md:font-semibold ">
        Create New Recipe
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="form-control mb-4 w-full max-w-sm md:max-w-lg ">
          <div className="label">
            <span className="label-text text-sm md:text-2xl">Title:</span>
          </div>
          <input
            ref={title}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-lg"
          />
        </label>
        <label className="form-control mb-4 w-full max-w-sm  md:max-w-lg">
          <div className="label">
            <span className="label-text text-sm md:text-2xl">Ingredients:</span>
          </div>
          <input
            ref={ingredients}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-lg"
          />
          <div className="">
            <button onClick={handleAddIngridient} className="btn btn-xs">
              Add
            </button>
          </div>
          <div>
            {ingridient.length > 0 &&
              ingridient.map((ing, index, ingArray) => {
                return (
                  <span className="inline-block" key={ing}>
                    {ing}
                    {index == ingArray.length - 1 ? "." : ","}
                  </span>
                );
              })}
          </div>
        </label>

        <label className="form-control mb-4 w-full max-w-sm md:mt-5 md:max-w-lg ">
          <div className="label">
            <span className="label-text text-sm md:text-2xl">
              Cooking time:
            </span>
          </div>
          <input
            ref={cookingTime}
            type="number"
            placeholder=""
            className="input input-bordered w-full max-w-lg"
          />
        </label>

        <label className="form-control mb-4 w-full max-w-sm md:max-w-lg">
          <div className="label">
            <span className="label-text text-sm md:text-2xl">Images url:</span>
          </div>
          <input
            ref={images}
            type="url"
            placeholder=""
            className="input input-bordered w-full max-w-lg"
          />
          <div className=" ">
            <button onClick={handleAddImage} className="btn btn-xs">
              Add
            </button>
          </div>
          <div>
            {image.length> 0 && image.map((images)=>{
              return <img key={images} src={images} alt="" width={100} height={200} />
            })}
          </div>
        </label>

        <label className="form-control mb-4 w-full max-w-sm md:mt-5 md:max-w-lg ">
          <div className="label">
            <span className="label-text text-sm md:text-2xl">Method:</span>
          </div>
          <textarea
            ref={method}
            type="text"
            placeholder=""
            className="input input-bordered w-full max-w-lg"
          />
        </label>

        {/* <label className="label cursor-pointer">
          <span className="label-text text-sm md:text-lg"> </span>
          <input
            ref={completed}
            defaultChecked={false}
            type="checkbox"
            className="checkbox-primary checkbox-sm  md:checkbox-md"
          />
        </label> */}
        <div className="flex gap-8">
          <div className=" mb-3">
            <div>
              {!isPending && <Button disabled={false} text={"Create"} />}
              {isPending && <Button disabled={true} text={"Loading..."} />}
            </div>
          </div>
          <div>
            <button
              onClick={() => handlePrivew(handlePrivew)}
              className="btn btn-secondary btn-sm md:btn-md"
            >
              Priview
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
