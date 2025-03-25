import { Logo } from "../Logo";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="contact-footer">
      <Logo />
      <div className="other-contacts">
        Also find me on{" "}
        <a
          href="http://facebook.com/share/15qq826JvY/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Facebook
        </a>
        ,{" "}
        <a
          href="http://www.instagram.com/ethanm27?igsh=MWs1MzFvczF3NzI0Mg%3D%3D&ut-m_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Instagram
        </a>
        , and{" "}
        <a className="contact-link" href="mailto:ethan.mylett@yahoo.com">
          Email
        </a>
        <br></br>
        <span className="nowrap">Cleveland, Ohio</span>
        <br></br>
        <br></br>
        <span>&copy; {new Date().getFullYear()} Ethan Mylett</span>
      </div>
    </div>
  );
};
