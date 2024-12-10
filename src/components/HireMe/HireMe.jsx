// import React, { useState } from 'react';
// import { motion } from 'framer-motion';  // Import framer-motion for animations
// import './HireMe.css';

// const HireMe = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="hire-section relative py-12 px-6 lg:px-24">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Side: Contact Form */}
//         <div className="left-content space-y-6">
//           <motion.h2
//             className="text-4xl font-semibold text-gray-800"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             Let’s Build Something Amazing Together
//           </motion.h2>
//           <motion.p
//             className="text-lg text-gray-600"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             If you have a project in mind, feel free to reach out. Let's make it happen!
//           </motion.p>

//           <motion.form
//             className="contact-form space-y-6"
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           >
//             <div className="form-group">
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-200"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-200"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-200"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 focus:outline-none transition-all duration-200"
//             >
//               Send Message
//             </button>
//           </motion.form>
//         </div>

//         {/* Right Side: Additional Content or Image */}
//         <div className="right-content text-center lg:text-left text-gray-800">
//           <motion.h3
//             className="text-2xl font-medium mb-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             Why Choose Me?
//           </motion.h3>
//           <motion.p
//             className="mb-6 text-lg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.8 }}
//           >
//             With years of experience in full-stack development and a passion for creating seamless, user-friendly
//             applications, I am committed to delivering high-quality solutions tailored to your needs.
//           </motion.p>
//           <img
//             src="https://via.placeholder.com/400"
//             alt="Placeholder Image"
//             className="mx-auto lg:mx-0 mb-4 w-full max-w-xs rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
//           />
//           <p className="text-sm">Let's turn your idea into reality. Get in touch today!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HireMe;






import React, { useState } from "react";
import { motion } from "framer-motion";  // Import framer-motion for animations
import Particles from "react-tsparticles"; // Import react-tsparticles
import { loadFull } from "tsparticles";  // Import tsparticles functions
import './HireMe.css';

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const particlesInit = async (main) => {
    await loadFull(main); // Initialize the particles engine
  };

  const particlesOptions = {
    particles: {
      number: { value: 80 },  // Increase the number of particles for better visibility
      size: { value: 5 },  // Make the particles a bit bigger for better visibility
      move: { 
        enable: true, 
        speed: 4,  // Speed of particle movement
        direction: "none",  // Allow free movement of particles
      },
      opacity: { value: 0.7 },  // Slightly higher opacity for better visibility
      line_linked: {
        enable: true,
        distance: 120,
        color: "#ffffff",  // White color for the lines connecting particles
        opacity: 0.5,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onhover: { 
          enable: true, 
          mode: "repulse" // Repulse effect on hover
        },
        onclick: { enable: true, mode: "push" }, // Add particles on click for interaction
      },
    },
  };

  return (
    <div className="hire-section relative py-12 px-6 lg:px-24" id="contact">
      {/* Particles Background */}
      <div className="particles-background absolute inset-0 z-0">
        <Particles init={particlesInit} options={particlesOptions} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Contact Form */}
        <div className="left-content space-y-6">
          <motion.h2
            className="text-4xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Let’s Build Something Amazing Together
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            If you have a project in mind, feel free to reach out. Let's make it happen!
          </motion.p>

          <motion.form
            className="contact-form space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-200"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-200"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-200"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 focus:outline-none transition-all duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Right Side: Additional Content or Image */}
        <div className="right-content text-center lg:text-left text-gray-800">
          <motion.h3
            className="text-2xl font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Why Choose Me?
          </motion.h3>
          <motion.p
            className="mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            With years of experience in full-stack development and a passion for creating seamless, user-friendly
            applications, I am committed to delivering high-quality solutions tailored to your needs.
          </motion.p>
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder Image"
            className="mx-auto lg:mx-0 mb-4 w-full max-w-xs rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          />
          <p className="text-sm">Let's turn your idea into reality. Get in touch today!</p>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
