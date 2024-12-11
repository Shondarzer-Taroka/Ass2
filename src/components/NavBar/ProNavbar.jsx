// import React, { useState } from "react";

// const ProNavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 text-white top-0 fixed w-full z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <h1 className="text-2xl font-bold">Portfolio</h1>
//           </div>
//           {/* Hamburger Menu */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//           {/* Full Menu */}
//           <div className="hidden md:flex space-x-4">
//             <a href="#home" className="hover:text-blue-400">
//               Home
//             </a>
//             <a href="#about" className="hover:text-blue-400">
//               About
//             </a>
//             <a href="#projects" className="hover:text-blue-400">
//               Projects
//             </a>
//             <a href="#contact" className="hover:text-blue-400">
//               Contact
//             </a>
//             <a href="#skills" className="hover:text-blue-400">
//               Skills
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <a
//             href="#home"
//             className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             About
//           </a>
//           <a
//             href="#projects"
//             className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Contact
//           </a>
//           <a
//             href="#skills"
//             className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
//           >
//             Skills
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default ProNavBar;







import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  const handleDownloadResume = () => {
    setDownloading(true);
    let progress = 0;
    const downloadInterval = setInterval(() => {
      if (progress < 100) {
        progress += 2; 
        setDownloadProgress(progress);
      } else {
        clearInterval(downloadInterval);
        
        const link = document.createElement("a");
        link.href = "https://drive.usercontent.google.com/u/0/uc?id=1NDIZP0oOFDI1QeDQ0ID7DxHK0wgoLkqY&export=download"; 
        link.download = "resume.pdf"; 
        link.click();
        setDownloading(false);
      }
    }, 100);
  };

  return (
    <nav className="bg-gray-800 text-white top-0 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Full Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to={'/Ass2'} className="hover:text-blue-400">
              Home
            </Link>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
            {/* Download Resume Button */}
            <button
              onClick={handleDownloadResume}
              className={`hover:text-blue-400 flex items-center px-4 py-2 rounded-lg transition-all ${
                downloading
                  ? "text-white border-2 border-blue-600 animate-pulse"
                  : "bg-gray-700 text-gray-300 border-2 border-gray-600"
              }`}
              style={{
                background: downloading
                  ? `linear-gradient(to right, #3b82f6 ${downloadProgress}%, #1f2937 ${downloadProgress}%)`
                  : "none", // Fill background as progress increases
              }}
            >
              {downloading ? (
                <span>Downloading...</span>
              ) : (
                <span>Download Resume</span>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact
          </a>
          <a
            href="#skills"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Skills
          </a>
          {/* Mobile Download Resume */}
          <button
            onClick={handleDownloadResume}
            className={`block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white ${
              downloading ? "bg-blue-500 border-2 border-blue-600 animate-pulse" : ""
            }`}
            style={{
              background: downloading
                ? `linear-gradient(to right, #3b82f6 ${downloadProgress}%, #1f2937 ${downloadProgress}%)`
                : "none",
            }}
          >
            {downloading ? "Downloading..." : "Download Resume"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default ProNavBar;
