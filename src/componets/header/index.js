import logo from "../../assets/images/travel-logo.svg";
import "./header.scss";
import React from "react";
import "./hamburger.css"

function Header() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isHambActive, setIsHambActive] = React.useState(false)
  const breakpoint = 900;
  React.useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
    // return () => {
    //     window.removeEventListener("resize", handleResizeWindow);
    // }
  });
  const clickHandler = (event) => {
        setIsHambActive(!isHambActive);
  }

  return (
    <header>
      <div className="container">
        <div className="logo_wrap">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        {width >= breakpoint ? (
          <nav className="header_navigation montserat_text">
            <ul className="neader_menu_nav">
              <li className="menu_nav_li">
                <a className="menu_nav_a" href="/">
                  Home
                </a>
              </li>
              <li className="menu_nav_li drop_menu_li">
                <a className="menu_nav_a" href="/destinations">
                  Destinations
                </a>
                <ul className="drop_menu">
                <li>
                    <a href="/destinations/belgium">Italy</a>
                  </li>
                  <li>
                    <a href="/destinations/belgium">Belgium</a>
                  </li>
                  <li>
                    <a href="/destinations/israel">Israel</a>
                  </li>
                  <li>
                    <a href="/destinations/germany">Germany</a>
                  </li>
                </ul>
              </li>
              <li className="menu_nav_li drop_menu_li">
                <a className="menu_nav_a" href="/gallery">
                  My gallery
                </a>
                <ul className="drop_menu">
                  <li>
                    <a href="/gallery#nature">Nature</a>
                  </li>
                  <li>
                    <a href="/gallery#kitchen">Kitchen</a>
                  </li>
                  <li>
                    <a href="/gallery#architecture">Architectura</a>
                  </li>
                </ul>
              </li>
              <li className="menu_nav_li">
                <a className="menu_nav_a" href="/about">
                  About
                </a>
              </li>
              <li className="menu_nav_li">
                <a className="menu_nav_a" href="/contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <div className="hamb-wrapper">
              <button
                className={`hamburger hamburger--minus ${
                  isHambActive ? "is-active" : ""
                }`}
                type="button"
                onClick={clickHandler}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
            </div>
            { isHambActive ? ( <nav className="hamb_menu_nav montserat_text">
            <ul className="hamb_menu_nav_ul ">
              <li className="hamb_menu_nav_li">
                <a className="hamb_menu_nav_a" href="/">
                  Home
                </a>
              </li>
              <li className="hamb_menu_nav_li">
                <a className="hamb_menu_nav_a" href="/destinations">
                  Destinations
                </a>
              </li>
              <li className="hamb_menu_nav_li">
                <a className="hamb_menu_nav_a" href="/gallery">
                  My gallery
                </a>
              </li>
              <li className="hamb_menu_nav_li">
                <a className="hamb_menu_nav_a" href="/about">
                  About
                </a>
              </li>
              <li className="hamb_menu_nav_li">
                <a className="hamb_menu_nav_a" href="/contacts">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>) : ''}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
