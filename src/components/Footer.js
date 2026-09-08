import {FaLinkedinIn,FaFacebookF,FaInstagram,FaGithub} from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">LOGO</div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="#" className="footer-icon"><FaLinkedinIn /></a>
          <a href="#" className="footer-icon"><FaFacebookF /></a>
          <a href="#" className="footer-icon"><FaInstagram /></a>
          <a href="#" className="footer-icon"><FaGithub /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;