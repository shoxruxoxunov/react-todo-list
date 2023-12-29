import { auth, googleProvider } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Signup() {
  const { dispatch } = useGlobalContext();
  const handleGoogleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch({ type: "LOGIN", paylaod: user });
        toast.success("welcome");
      })
      .catch((error) => {
        const errorMessge = error.message;
        console.log(error);
        toast.error(error.Message);
      });
  };
  return (
    <>
      <div className="grid h-screen w-full place-items-center ">
        <form className="flex flex-col gap-3">
          <div className="flex justify-between gap-[140px]">
            <h1 className="text-lg font-bold md:text-3xl md:font-bold">
              Signup
            </h1>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-on h-5 w-5 fill-current md:h-10 md:w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off h-5 w-5 fill-current md:h-10 md:w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <label className="">
            <input
              type="text"
              placeholder="Type user-name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Type email"
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Type password"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </label>
          <div className="flex flex-col gap-3">
            <button className="btn btn-outline btn-success text-xs font-light md:text-lg md:font-bold">
              Login
            </button>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-secondary text-xs font-light md:text-lg md:font-bold"
            >
              Google
            </button>
            <a
              href="/login"
              className="btn btn-outline btn-primary   text-xs font-light md:text-lg md:font-bold"
            >
              If you don't have any account?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
