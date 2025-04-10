import React, { useState } from "react";

const faqData = [
  {
    question: "How to create an account?",
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
  {
    question: "Does Easy & Feast have A Experience Center ?",
    answer:
      "Yes we have a few! You’re welcome to visit our Experience Centres, located in Bengaluru, Mumbai, Hyderabad and Chennai. Here, touch and feel a plethora of cutting-edge materials, finishes, designs and styles to help you navigate your personal home design experience. From modular kitchen models, living room interiors, bedroom layouts, sleek wardrobe designs and more, seek endless inspiration for your home. To know more about our experience centres -",
  },
  {
    question: "Can i see my project in virtual reality ?",
    answer:
      "Absolutely! We’ll conjure your final design in virtual reality to allow you to witness a lifelike version of your end project.",
  },
  {
    question: "What is the payment process?",
    answer:
      "Our payment process is secure and straightforward. Choose your preferred plan, enter your payment details, and complete the transaction. You will receive confirmation via email.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="py-16 md:py-20 lg:py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="FAQ section"
                className="w-full h-80 md:h-[30rem] lg:h-[33rem] rounded-xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-10">
                  <h6 className="text-lg text-center lg:text-left font-medium text-indigo-600 mb-2">
                    FAQs
                  </h6>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-center lg:text-left font-bold text-gray-900 leading-tight md:leading-[3.25rem] mb-5">
                    Looking for answers?
                  </h2>
                </div>
                <div>
                  {faqData.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 py-4 md:py-6"
                    >
                      <button
                        className="w-full flex justify-between items-center text-left text-base sm:text-lg md:text-xl font-medium text-gray-600 hover:text-indigo-600 transition duration-300"
                        onClick={() => toggleAccordion(index)}
                      >
                        <h5>{item.question}</h5>
                        <svg
                          className={`transition-transform duration-300 ${
                            openIndex === index
                              ? "rotate-180 text-indigo-600"
                              : "text-gray-900"
                          }`}
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      {openIndex === index && (
                        <div className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
