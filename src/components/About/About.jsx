import React from "react";

const AboutPage = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/path-to-your-profile-image.jpg" // Replace with your image path
              alt="Your Name"
              className="rounded-lg shadow-lg w-64 h-64 object-cover"
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-lg leading-relaxed mb-4">
              Hello! I'm <span className="font-bold">[Your Name]</span>, a passionate and dedicated web developer with a keen eye for design and a strong
              focus on creating user-friendly and efficient web applications.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              With a background in [Your Field, e.g., Computer Science, Software Engineering], I specialize in modern web technologies, including React,
              Node.js, and more. My goal is to build beautiful, scalable, and impactful digital solutions.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying [your hobbies, e.g., hiking,
              photography].
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-center mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-xl font-medium">React</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-xl font-medium">Node.js</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-xl font-medium">Express.js</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-xl font-medium">MongoDB</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-xl font-medium">JavaScript</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-xl font-medium">CSS</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-xl font-medium">TypeScript</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-xl font-medium">Git</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-6">My Mission</h3>
          <p className="text-lg leading-relaxed mx-auto max-w-4xl">
            My mission is to leverage technology to create meaningful solutions that empower individuals and businesses to achieve their goals. Whether it's
            developing user-friendly applications, crafting seamless user experiences, or solving complex problems, I'm committed to delivering excellence
            and innovation in every project I undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
