import { useState, useEffect } from "react";
import { FaTimes, FaBars, FaChevronDown } from "react-icons/fa";
import { PiToolboxFill } from "react-icons/pi";
import { FaUserAstronaut } from "react-icons/fa6";
import { LuAmpersand } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import AuthModel from "../Auth/AuthModel";

export const NAVIGATION_LINK = [
  { id: 1, label: "Interior", href: "/interior" },
  { id: 2, label: "Explore", href: "/explore" },
  { id: 3, label: "Gift Cards", href: "/giftcards" },
  { id: 4, label: "Blogs", href: "/blog" },
  { id: 5, label: "Shop", href: "/shop/products" },
];

export const DROPDOWN_DESIGN = [
  { id: 6, label: "Modular Kitchen Design", href: "#services" },
  { id: 7, label: "Living Room", href: "#services" },
  { id: 8, label: "Bed Room", href: "#about" },
  { id: 9, label: "Pooja Room", href: "#contact" },
];

export const DROPDOWN_DESIGN1 = [
  { id: 10, label: "Dining Room ", href: "#services" },
  { id: 11, label: "Bath Room", href: "#services" },
  { id: 12, label: "Balcony", href: "#about" },
  { id: 13, label: "Space Saving Design", href: "#contact" },
];

export const DROPDOWN_MORE = [
  { id: 14, label: "Pricing", href: "/more/Pricing" },
  { id: 15, label: "FAQs ", href: "/more/FAQS" },
  { id: 16, label: "Aboutus  ", href: "/more/about" },
  { id: 16, label: " Contact ", href: "/more/contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  const [openAuthModal, setOpenAuthModal] = useState(false);

  // const handleUserClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const handleNavigateClick = (href) => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offsetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed left-2 right-0 z-50 pl-2 pr-4 top-4 transition-colors duration-300 ${
          isScrolled
            ? "bg-transparent text-gray-900 border-stone-50/30"
            : "bg-transparent text-gray-200 border-stone-700"
        }`}
      >
        {/* Desktop Mode */}
        <div className="mx-auto hidden max-w-7xl items-center justify-center rounded-2xl border bg-white/10 backdrop-blur-lg shadow-2xl shadow-gray-800 py-2 px-2 lg:flex ">
          <div className="flex items-center justify-between gap-10">
            <Link to="/" className="font-serif text-xl">
              EARNEST{" "}
              <span className="flex text-center">
                <LuAmpersand className="mt-1" /> FEAST
              </span>{" "}
            </Link>

            <ul className="flex items-center gap-4 ml-16 font-semibold">
              {NAVIGATION_LINK.map((link, index) => (
                <li key={index} className="text-sm cursor-pointer">
                  <p
                    className="text-sm cursor-pointer"
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </p>
                </li>
              ))}

              <li className="relative dropdown">
                <button
                  className="text-sm flex cursor-pointer items-center gap-1"
                  onClick={() => toggleDropdown("design")}
                >
                  Design <FaChevronDown className="text-xs" />
                </button>
                {activeDropdown === "design" && (
                  <div className="absolute left-0 top-full mt-7 border bg-black/50 backdrop-blur-xl shadow-2xl shadow-gray-800 rounded-lg w-96 text-gray-200 z-50">
                    <div className="flex gap-2 p-2">
                      <ul className="w-1/2">
                        {DROPDOWN_DESIGN.map((item, index) => (
                          <li
                            key={index}
                            className="hover:bg-black/10 hover:backdrop-blur-xl hover:rounded-xl last:border-none"
                          >
                            <a
                              className="block px-4 py-2"
                              href={item.href}
                              onClick={(e) => handleLinkClick(e, item.href)}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>

                      <ul className="w-1/2">
                        {DROPDOWN_DESIGN1.map((item, index) => (
                          <li
                            key={index}
                            className="hover:bg-black/10 hover:backdrop-blur-xl hover:rounded-xl last:border-none"
                          >
                            <a
                              className="block px-4 py-2"
                              href={item.href}
                              onClick={(e) => handleLinkClick(e, item.href)}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              {/* More - Dropdown */}
              <li className="relative dropdown">
                <button
                  className="text-sm flex cursor-pointer items-center gap-1"
                  onClick={() => toggleDropdown("more")}
                >
                  More <FaChevronDown className="text-xs" />
                </button>
                {activeDropdown === "more" && (
                  <ul className="absolute left-0 mt-7 border bg-black/50 backdrop-blur-xl shadow-2xl shadow-gray-800 rounded-lg w-64 text-gray-200">
                    {DROPDOWN_MORE.map((item, index) => (
                      <li
                        key={index}
                        className="hover:bg-black/10 hover:backdrop-blur-xl hover:rounded-xl last:border-none"
                      >
                        <a
                          className="block px-4 py-2"
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            <div className="ml-12 space-x-2 gap-4">
              <form className="max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-700 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>

                  <input
                    type="search"
                    className={`block w-full p-1 pl-10 text-md border rounded-lg bg-transparent ${
                      isScrolled
                        ? "text-gray-700 border-gray-700"
                        : "text-gray-100 border-gray-100"
                    }`}
                    placeholder="Search "
                    required
                  />
                </div>
              </form>
            </div>

            <div className="space-x-2 mr-3 flex gap-5 items-center text-2xl">
              <PiToolboxFill className="cursor-pointer" />
              <FaUserAstronaut
                onClick={handleOpen}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Mobile Mode */}
        <div className="rounded-2xl backdrop-blur-md lg:hidden border px-5 ">
          <div className="flex items-center justify-between">
            <a href="#" className="font-serif text-xl">
              EARNEST{" "}
              <span className="flex text-center">
                <LuAmpersand className="mt-1" /> FEAST
              </span>{" "}
            </a>

            <div className="flex gap-5 items-center pl-8 pr-2">
              <div className="space-x-2 flex gap-5 items-center text-2xl">
                <PiToolboxFill />
                <FaUserAstronaut
                  onClick={handleOpen}
                  className="cursor-pointer"
                />
              </div>

              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none lg:hidden"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <ul className="ml-2 mt-4 mb-5 flex flex-col gap-4">
              {NAVIGATION_LINK.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* DESIGN DROPDOWN */}
              <li className="relative dropdown">
                <button
                  className="text-md flex items-center gap-1"
                  onClick={() => toggleDropdown("design")}
                >
                  Design <FaChevronDown className="text-xs" />
                </button>
                {activeDropdown === "design" && (
                  <div className="absolute left-0 top-full mt-7 border bg-black/60 backdrop-blur-xl shadow-2xl shadow-gray-800 rounded-lg w-80 text-gray-200 z-50">
                    <div className="flex gap-2 p-2">
                      <ul className="w-1/2">
                        {DROPDOWN_DESIGN.map((item, index) => (
                          <li
                            key={index}
                            className="hover:bg-black/10 hover:backdrop-blur-xl hover:rounded-xl last:border-none"
                          >
                            <a
                              className="block px-4 py-2"
                              href={item.href}
                              onClick={(e) => handleLinkClick(e, item.href)}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>

                      <ul className="w-1/2">
                        {DROPDOWN_DESIGN1.map((item, index) => (
                          <li
                            key={index}
                            className="hover:bg-black/10 hover:backdrop-blur-xl hover:rounded-xl last:border-none"
                          >
                            <a
                              className="block px-4 py-2"
                              href={item.href}
                              onClick={(e) => handleNavigateClick(e, item.href)}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>

              {/* More - Dropdown */}
              <li className="relative dropdown">
                <button
                  className="text-md flex items-center gap-1"
                  onClick={() => toggleDropdown("more")}
                >
                  More <FaChevronDown className="text-xs" />
                </button>
                {activeDropdown === "more" && (
                  <ul className="absolute left-0 top-full mt-2 border bg-black/60 backdrop-blur-xl shadow-2xl shadow-gray-800 rounded-lg w-80 text-gray-200 z-50">
                    {DROPDOWN_MORE.map((item, index) => (
                      <li
                        key={index}
                        className="hover:bg-black/10 hover:backdrop-blur-xl hover:rounded-xl last:border-none"
                      >
                        <a
                          className="block px-4 py-2"
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <div className="space-x-2 gap-4">
                  <form className="max-w-md mx-auto">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-white-100 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-1 ps-10 text-md border rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search "
                        required
                      />
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <AuthModel handleClose={handleClose} open={openAuthModal} />
    </>
  );
};

export default Navbar;
