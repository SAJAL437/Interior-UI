import React from "react";
import { LuAmpersand } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";

const Main = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div>
      {/* Main content */}
      <div className="relative w-full h-96 bg-imgpro bg-cover bg-center sm:rounded-3xl shadow-lg shadow-gray-600 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full p-5 bg-black/50 sm:rounded-3xl flex items-center justify-center">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-gray-100 text-5xl sm:text-7xl font-bold mt-5">
              Welcome To Market Place
            </h1>
            <p className="text-white text-base sm:text-lg mt-3">
              Everything you wanted to know about getting your interiors is
              right here.
            </p>
            <p className="text-white text-base sm:text-lg">
              Discover the latest home tours, decor ideas, interior design
              guides, industry insights, and more.
            </p>
          </div>
        </div>
      </div>

      <div className=" m-5">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Shop
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              Products
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default Main;
