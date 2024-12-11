import React from "react";
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";

const ProFooter = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                   
                    <div className="flex space-x-6 mb-4">
                        <a
                            href="https://github.com/shondarzer-taroka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mdnazmulnhasan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://www.facebook.com/nazmulnhasan1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white"
                        >
                            <FaFacebook size={24} />
                        </a>
                    </div>

                    {/* Contact Information */}
                    <p className="text-gray-300 text-center mb-4">
                        You can reach me at:{" "}
                        <a href="mailto:mdnazmulnhasan@gmail.com" className="hover:text-blue-400">
                            mdnazmulnhasan@gmail.com

                        </a>
                    </p>

                    {/* Copyright Notice */}
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default ProFooter;
