import './styles.css';
import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <Link to="https://www.instagram.com/" target="_blank">
        <FaInstagram className="icon"></FaInstagram>
      </Link>
      <Link to="https://www.youtube.com/" target="_blank">
        <FaYoutube className="icon"></FaYoutube>
      </Link>
      <Link to="https://x.com/?lang=pt-br" target="_blank">
        <FaTwitter className="icon"></FaTwitter>
      </Link>
    </div>
  );
}
