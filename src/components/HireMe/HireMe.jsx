import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie-player";
import animationData from "../../../public/animation.json"; 

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailStatus, setEmailStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const serviceID = import.meta.env.VITE_service;
    const templateID = import.meta.env.VITE_template;
    const userID = import.meta.env.VITE_user;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userID
      )
      .then(() => {
        setEmailStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setEmailStatus(
          `Failed to send the message. Error: ${error.text || "Unknown error"}`
        );
      })
      .finally(() =>
        setTimeout(() => {
          setEmailStatus("");
        }, 3000)
      );
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    particles: {
      number: { value: 80 },
      size: { value: 5 },
      move: { enable: true, speed: 4 },
      opacity: { value: 0.7 },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.5,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
      },
    },
  };

  return (
    <div className="hire-section max-w-7xl mx-auto relative py-12 px-6 lg:px-24" id="contact">
      {/* Particles Background */}
      <div className="particles-background absolute inset-0 z-0">
        <Particles init={particlesInit} options={particlesOptions} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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
            If you have a project in mind, feel free to reach out. Let's make it
            happen!
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
                aria-label="Your Name"
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
                aria-label="Your Email"
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
                aria-label="Your Message"
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

          {emailStatus && (
            <p
              className={`text-center mt-4 ${
                emailStatus.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {emailStatus}
            </p>
          )}
        </div>

   
        <div className="right-content text-center lg:text-left text-gray-800">
          <Lottie
            loop
            animationData={animationData}
            play
            className="mx-auto lg:mx-0 w-full max-w-xs"
          />
          <p className="text-sm mt-4">
            Let's turn your idea into reality. Get in touch today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
