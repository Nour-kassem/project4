import {FaLinkedinIn,FaFacebookF,FaInstagram} from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <div className="logo">LOGO</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>

      <div className="nav-icons">
        <div className="social-icons">

          <div className="icon">
            <FaLinkedinIn />
          </div>

          <div className="icon">
            <FaFacebookF />
          </div>

          <div className="icon">
            <FaInstagram />
          </div>

        </div>

        <button className="connect-btn"
          onClick={() => {
          document.getElementById("contact").scrollIntoView({
          behavior: "smooth"
          });
          }}>Let's Connect
        </button>
      </div>
    </nav>
  );
}

export default Navbar;