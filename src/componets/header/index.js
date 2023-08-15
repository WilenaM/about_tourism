import logo from "../../assets/images/travel-logo.svg";
import "./header.scss";
import React from "react";
import "./hamburger.css";
import {NavLink, Link} from "react-router-dom";

function Header() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [offsetTop, setOffsetTop] = React.useState(0);
  const [isHambActive, setIsHambActive] = React.useState(false)
  const breakpoint = 900;
  React.useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    const onScroll = () => setOffsetTop(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener("resize", handleWidth);
    return () => {
        window.removeEventListener("resize", handleWidth);
        window.removeEventListener('scroll', onScroll);
    }
  });
  const clickHandler = (event) => {
        setIsHambActive(!isHambActive);
  }

  return (
    <header style={offsetTop < 640 ? {
      position:  "absolute",
      height: "90px"

    } : {
      position:  "fixed",
      backgroundColor: "#070707",
      height: "60px",
      animation: "expandVert 300ms ease-in forwards",
      transformOrigin: "top"
    }}>
      <div className="container">
        <div className="logo_wrap">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {width >= breakpoint ? (
          <nav className="header_navigation montserat_text">
            <ul className="neader_menu_nav">
              <li className="menu_nav_li">
                <NavLink className="menu_nav_a" to="/">
                  Home
                </NavLink>
              </li>
              <li className="menu_nav_li drop_menu_li">
                <NavLink className="menu_nav_a" to="/destinations">
                  Destinations
                </NavLink>
                <ul className="drop_menu">
                <li>
                    <NavLink to="/destinations/italy">Italy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/destinations/belgium">Belgium</NavLink>
                  </li>
                  <li>
                    <NavLink to="/destinations/israel">Israel</NavLink>
                  </li>
                  <li>
                    <NavLink to="/destinations/germany">Germany</NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu_nav_li drop_menu_li">
                <NavLink className="menu_nav_a" to="/gallery">
                  My gallery
                </NavLink>
              </li>
              <li className="menu_nav_li">
                <NavLink className="menu_nav_a" to="/about">
                  About
                </NavLink>
              </li>
              <li className="menu_nav_li">
                <NavLink className="menu_nav_a" to="/contacts">
                  Contacts
                </NavLink>
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
              <li onClick={clickHandler} className="hamb_menu_nav_li">
                <Link className="hamb_menu_nav_a" to="/">
                  Home
                </Link>
              </li>
              <li onClick={clickHandler} className="hamb_menu_nav_li">
                <Link className="hamb_menu_nav_a" to="/destinations">
                  Destinations
                </Link>
              </li>
              <li onClick={clickHandler} className="hamb_menu_nav_li">
                <Link className="hamb_menu_nav_a" to="/gallery">
                  My gallery
                </Link>
              </li>
              <li onClick={clickHandler} className="hamb_menu_nav_li">
                <Link className="hamb_menu_nav_a" to="/about">
                  About
                </Link>
              </li>
              <li onClick={clickHandler} className="hamb_menu_nav_li">
                <Link className="hamb_menu_nav_a" to="/contacts">
                  Contacts
                </Link>
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
