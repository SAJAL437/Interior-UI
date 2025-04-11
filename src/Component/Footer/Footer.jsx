import React from "react";
import { LuAmpersand } from "react-icons/lu";

const Footer = () => {
  return (
    <footer class="w-full bg-gray-100 text-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!-- Grid Layout --> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          {/* <!-- Branding Section --> */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="/"
              className="flex justify-center lg:justify-start font-serif text-xl"
            >
              <p>
                EARNEST{" "} <br />
                <span className="flex text-center">
                  <LuAmpersand className="mt-1" /> FEAST
                </span>{" "}
              </p>
            </a>
            <p className="mt-4 text-center lg:text-left text-sm text-gray-600">
              Bringing your ideas to life with clean and modern design.
            </p>
          </div>

          {/* <!-- Column 1 --> */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 2 --> */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Products</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 3 --> */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 4 --> */}
          <div>
            <h5 className="font-semibold text-gray-900 mb-4">Support</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Bottom Footer --> */}
        <div className="border-t border-gray-200 py-4 text-sm text-center text-gray-600">
          &copy; 2025 Easy and Feast. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
