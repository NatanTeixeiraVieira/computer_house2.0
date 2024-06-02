import './styles.css';
import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa6';
export default function Footer() {
  return (
    <div className="footer">
      <FaInstagram></FaInstagram>
      <FaYoutube></FaYoutube>
      <FaTwitter></FaTwitter>
      <FaCopyright></FaCopyright>
    </div>
  );
}
