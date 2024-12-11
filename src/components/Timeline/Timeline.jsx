import React from "react";
import { motion } from "framer-motion";

const timelineData = [
    {
        year: "2020",
        description:
            "Started working as a PPC and project manager in a local web studio. Began learning skills to expand knowledge in computer."
      },
      {
        year: "2022",
        description:
          "Gained foundational computer knowledge, including hardware basics, operating systems, and software usage.",
      },
      {
        year: "2023",
        description:
          "Learned HTML and CSS, building a basic understanding of front-end development through small personal projects.",
      },
      {
        year: "2024",
        description:
          "Fully dedicated to web development, mastering React, Node.js, Express, and database management to build dynamic full-stack applications.",
      },
];

const Timeline = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-16 px-6 sm:px-12 overflow-hidden" id="about">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">About Me</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`relative mb-12 flex flex-col items-center text-center sm:text-left sm:flex-row ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Circle Marker */}
            <div className="absolute w-8 h-8 bg-blue-500 rounded-full border-4 border-white sm:top-0 top-6 left-1/2 transform -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:translate-y-0"></div>

            {/* Content */}
            <div
              className={`bg-white shadow-lg rounded-lg p-6 max-w-lg transform sm:scale-95 hover:scale-100 transition-transform duration-300 ${
                index % 2 === 0 ? "sm:mr-12" : "sm:ml-12"
              }`}
            >
              <span className="block text-xl font-semibold text-blue-600 mb-2">
                {item.year}
              </span>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;