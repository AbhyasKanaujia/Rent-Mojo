import "./footer.css";
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-list-container">
        <li>
          <Link className="footer-list-item" to="/">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link className="footer-list-item" to="/">
            Return Policy
          </Link>
        </li>
        <li>
          <Link className="footer-list-item" to="/">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="footer-list-item" to="/">
            Career
          </Link>
        </li>
      </ul>
      <p className="text-lg">© 2022 RENT MOJO</p>
    </footer>
  );
};
