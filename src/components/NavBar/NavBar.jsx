import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const NavBar = () => {
    return (
        <section>
            <Navbar fluid rounded className="bg-gray-100 shadow-xl">
                <Navbar.Brand as={Link} to="/">

                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    MD NAZMUL HASAN || PORTFOLIO
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link to="/" as={Link} active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link to="/about" as={Link}>
                        About
                    </Navbar.Link>
                    <Navbar.Link to="/services" as={Link}>
                        Services
                    </Navbar.Link>
                    <Navbar.Link to="/pricing" as={Link}>
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link to="/contact" as={Link}>
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default NavBar;
