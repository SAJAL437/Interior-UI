import React from "react";
import Navbar from "../../navbar/Navbar";
import { MapPin, Phone, Mail } from "lucide-react";
import Subscription from "../../ChildSection/Subscription";

const Contact = () => {
  return (
    <div className="bg-black/20 backdrop-blur-2xl min-h-screen text-gray-200">
      <Navbar />

      <div className=" py-16 px-4 sm:px-6 lg:px-20 text-yellow-900">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 mt-22">
              Get in Touch
            </h1>
            <p className="text-yellow-700 text-lg sm:text-xl">
              We'd love to hear from you. Reach out with any questions,
              suggestions, or feedback!
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.871314698325!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c132d6e7%3A0x95f5c8a315c3c8de!2sMG%20Road%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1617842900929!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full h-full"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-yellow-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800">Our Address</h3>
                  <p className="text-yellow-700">
                    Easy & Feast, 123, MG Road, Bangalore, Karnataka - 560001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-yellow-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800">Phone</h3>
                  <p className="text-yellow-700">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-yellow-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800">Email</h3>
                  <p className="text-yellow-700">contact@easyandfeast.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <Subscription />
      </div>
    </div>
  );
};

export default Contact;
