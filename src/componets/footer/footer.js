import "./footer.scss";
import logo from "../../assets/images/travel-logo.svg";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: "images/facebook_logo_icon.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: "images/instagram_logo_icon.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    icon: "images/linkedin_logo_icon.svg",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    icon: "images/github_logo_icon.svg",
  },
];

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_flex">
          <div className="logo_img">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="footer_contacts">
            <h4>Contacts</h4>
            <ul className="footer_contacts_list">
              <li>
                <Link to="https://goo.gl/maps/KmjK55Z1t6yYQRsF9" target="_blank" rel="noreferrer">
                  Nikopol, Ukraine
                </Link>
              </li>
              <li>
                <Link to="tel:+380661234567">+380661234567</Link>
              </li>
              <li>
                <Link to="mailto:wilena0207@gmail.com">wilena0207@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div className="follow_us">
            <h4>FOLLOW US ON SOCIAL</h4>
            <ul className="footer_social_list">
              {socialLinks.map((social) => (
                <li key={social.name} className="footer_social_list">
                  <Link
                    to={social.link}
                    className="social_link"
                    target="__blank"
                    rel="noreferrer"
                    style={{
                      mask: `url(${social.icon})`,
                      WebkitMask: `url(${social.icon})`,
                    }}
                  ></Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Quick links</h4>
            <nav className="footer_navigation">
              <ul className="footer_nav_list">
                <li className="footer_nav_li">
                  <Link className="menu_nav_a" to="/">
                    Home
                  </Link>
                </li>
                <li className="footer_nav_li">
                  <Link className="footer_nav_a" to="/destinations">
                    Destinations
                  </Link>
                </li>
                <li className="footer_nav_li">
                  <Link className="footer_nav_a" to="/gallery">
                    My gallery
                  </Link>
                </li>
                <li className="footer_nav_li">
                  <Link className="footer_nav_a" to="/about">
                    About
                  </Link>
                </li>
                <li className="footer_nav_li">
                  <Link className="footer_nav_a" to="/contacts">
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer_copyright">{`© Wilena Mudra ${new Date(Date.now()).getFullYear()}`}</div>
      </div>
    </footer>
  );
}

export default Footer;
