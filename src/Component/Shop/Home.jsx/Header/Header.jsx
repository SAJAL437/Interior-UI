import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 50;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Header */}
      <nav
        className={`fixed left-0 right-0 z-50 pl-0 pr-0 top-4 transition-colors duration-300 ${
          isScrolled
            ? "bg-transparent text-gray-900 border-stone-50/30"
            : "bg-transparent text-gray-200 border-stone-700"
        } `}
      >
        <div className="relative left-5 w-fit items-center justify-center rounded-2xl border bg-white/10 backdrop-blur-lg shadow-2xl shadow-gray-800 py-2 px-2 lg:flex ">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-serif text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-8 transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-900 border-gray-800"
                    : "text-gray-50 border-gray-50"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
