import logo from "./images/logo.svg";
import close from "./images/icon-close.svg";
import hamburger from "./images/icon-hamburger.svg";
import Navigation from "./Navigation";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isNavHidden, toggleNav] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [prevWidth, setPrevWidth] = useState(window.innerWidth);
  const breakpointWidth = useRef(1000);

  const handleMenuToggle = () => {
    if (!isNavHidden) {
      let headerNav = document.querySelector(".header-nav");
      headerNav.classList.remove("slideIn");
      headerNav.classList.add("slideOut");
      setTimeout(() => {
        toggleNav(!isNavHidden);
      }, 500);
    } else {
      toggleNav(!isNavHidden);
    }
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      let currentWidth = window.innerWidth;
      setWidth(currentWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
    window.addEventListener("load", updateWindowWidth);
  }, []);

  useEffect(() => {
    if (width >= breakpointWidth.current) toggleNav(!isNavHidden);
  }, []);

  useEffect(() => {
    if (
      (prevWidth < breakpointWidth.current &&
        width >= breakpointWidth.current) ||
      (prevWidth >= breakpointWidth.current && width < breakpointWidth.current)
    ) {
      toggleNav(!isNavHidden);
      setPrevWidth(width);
    } else {
      setPrevWidth(width);
    }
  }, [width]);

  return (
    <header>
      <div className="header-content">
        <img className="logo" src={logo} alt=""></img>
        {!isNavHidden ? (
          <div className="animation-box">
            <Navigation
              place={"header"}
              className={
                width >= breakpointWidth.current
                  ? "header-nav"
                  : "header-nav slideIn"
              }
              isDesktop={width >= breakpointWidth.current ? false : true}
            ></Navigation>
          </div>
        ) : null}
        {width < breakpointWidth.current ? (
          <img
            className={isNavHidden ? "hamburger-icon" : "close-icon"}
            src={isNavHidden ? hamburger : close}
            alt=""
            onClick={handleMenuToggle}
          ></img>
        ) : null}

        <div className="header-heading">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
        </div>
        <div className="header-buttons">
          <button className="sff">Start for Free</button>
          <button className="lm">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
