import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="FooterContainer">
      <div className="Footer">
        Made with <FontAwesomeIcon className="FooterHeart" icon={faHeart} /> by
        Komal
      </div>
    </footer>
  );
};

export default Footer;
