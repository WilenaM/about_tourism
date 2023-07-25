import "./footer.scss";
import logo from "../../assets/images/travel-logo.svg";

const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: "/images/facebook_logo_icon.svg",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: "/images/instagram_logo_icon.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
    icon: "/images/linkedin_logo_icon.svg",
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    icon: "/images/github_logo_icon.svg",
  },
];

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_flex">
          <div className="logo_img">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="footer_contacts">
            <h4>Contacts</h4>
            <ul className="footer_contacts_list">
              <li>
                <a href="https://goo.gl/maps/KmjK55Z1t6yYQRsF9" target="_blank" rel="noreferrer">
                  Nikopol, Ukraine
                </a>
              </li>
              <li>
                <a href="tel:+380661234567">+380661234567</a>
              </li>
              <li>
                <a href="mailto:wilena0207@gmail.com">wilena0207@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="follow_us">
            <h4>FOLLOW US ON SOCIAL</h4>
            <ul className="footer_social_list">
              {socialLinks.map((social) => (
                <li key={social.name} className="footer_social_list">
                  <a
                    href={social.link}
                    className="social_link"
                    target="__blank"
                    rel="noreferrer"
                    style={{
                      mask: `url(${social.icon})`,
                      WebkitMask: `url(${social.icon})`,
                    }}
                  ></a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Quick links</h4>
            <nav className="footer_navigation">
              <ul className="footer_nav_list">
                <li className="footer_nav_li">
                  <a className="menu_nav_a" href="/">
                    Home
                  </a>
                </li>
                <li className="footer_nav_li">
                  <a className="footer_nav_a" href="/destinations">
                    Destinations
                  </a>
                </li>
                <li className="footer_nav_li">
                  <a className="footer_nav_a" href="/gallery">
                    My gallery
                  </a>
                </li>
                <li className="footer_nav_li">
                  <a className="footer_nav_a" href="/about">
                    About
                  </a>
                </li>
                <li className="footer_nav_li">
                  <a className="footer_nav_a" href="/contacts">
                    Contacts
                  </a>
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
