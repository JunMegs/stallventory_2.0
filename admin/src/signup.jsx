import myImage from "./assets/images/bg_stallventory.jpg";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div
      className="h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${myImage})` }}
    >
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-blend-soft-light bg-slate-50 rounded-md sm:w-7/12 md:w-1/2 lg:w-4/12 mt-48">
          <h1 className="text-xl font-semibold ">
            Hello there ?,{" "}
            <span className="font-normal">
              please fill in your information to continue
            </span>
          </h1>
          <form className="mt-6">
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label
                  htmlFor="firstname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Firstname
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  autoComplete="off"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span className="w-1/2">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Lastname
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  autoComplete="off"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>
            <label
              htmlFor="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />

            <Link to="/home">
              <button
                type="submit"
                className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-blue-600 shadow-lg focus:outline-none hover:bg-blue-500 hover:shadow-none"
              >
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <p className="flex justify-between k mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                Already registered?
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
