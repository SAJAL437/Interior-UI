import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div className="max-w-md w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] overflow-hidden">
      <div className="border-[10px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-xl  ">
        <div className="border-[10px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg p-6 sm:p-8">
          <h1 className="pb-6 font-bold dark:text-gray-400 text-3xl sm:text-4xl text-center cursor-default">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-2 dark:text-gray-400 text-sm sm:text-base block"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                placeholder="Name"
                required
                className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 dark:text-gray-400 text-sm sm:text-base block"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 dark:text-gray-400 text-sm sm:text-base block"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
              />
            </div>
            <a
              href="#"
              className="group text-blue-400 transition-all duration-100 ease-in-out text-sm"
            ></a>
            <button
              type="submit"
              className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-4 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
            >
              SIGN UP
            </button>
          </form>

          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="dark:text-gray-300">
              Already have an account?{" "}
              <Button
                onClick={() => navigate("/login")}
                className="text-blue-400 normal-case text-sm group"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Log in
                </span>
              </Button>
            </h3>
          </div>

          <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-xs sm:text-sm">
            <p className="cursor-default">
              By signing in, you agree to our{" "}
              <a
                href="#"
                className="group text-blue-400 transition-all duration-100 ease-in-out"
              >
                <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Terms
                </span>
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="group text-blue-400 transition-all duration-100 ease-in-out"
              >
                <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Privacy Policy
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
