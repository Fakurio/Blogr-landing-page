import { useState } from "react";
import arrowDark from "./images/icon-arrow-dark.svg";
import arrowLight from "./images/icon-arrow-light.svg";

const Navigation = ({ place, className, isDesktop }) => {
  const menuHeadings = { Product: false, Company: false, Connect: false };
  const [listItemStatus, toggleListItem] = useState(menuHeadings);

  const handleMenuClick = (e) => {
    let clickedMenuHeading = e.currentTarget.textContent;
    let currentArrowStyles =
      e.currentTarget.firstElementChild.firstElementChild.style;
    currentArrowStyles.transform === "rotate(180deg)"
      ? (currentArrowStyles.transform = "")
      : (currentArrowStyles.transform = "rotate(180deg)");

    let itemToHide = "";
    for (let key in listItemStatus) {
      if (clickedMenuHeading === key) itemToHide = key;
    }
    if (listItemStatus[itemToHide]) {
      e.currentTarget.nextElementSibling.firstElementChild.classList.remove(
        "slideIn"
      );
      e.currentTarget.nextElementSibling.firstElementChild.classList.add(
        "slideOut"
      );
      setTimeout(() => {
        toggleListItem({
          ...listItemStatus,
          [itemToHide]: listItemStatus[itemToHide] ? false : true,
        });
      }, 500);
    } else {
      toggleListItem({
        ...listItemStatus,
        [itemToHide]: listItemStatus[itemToHide] ? false : true,
      });
    }
  };

  const handleMouseOnMenu = (e) => {
    let menuHeader = e.target.textContent;
    for (let key in listItemStatus) {
      if (key === menuHeader) {
        if (!listItemStatus[key]) {
          let currentArrowStyles =
            e.target.firstElementChild.firstElementChild.firstElementChild
              .style;
          currentArrowStyles.transform = "rotate(180deg)";
          toggleListItem({ ...listItemStatus, [key]: true });
        }
      }
    }
    return;
  };

  const handleMouseOffMenu = () => {
    for (let key in listItemStatus) {
      if (listItemStatus[key]) {
        let menuHeader = Array.from(
          document.querySelectorAll(".header-nav-heading")
        ).filter((el) => el.textContent === key);
        let currentArrowStyles =
          menuHeader[0].firstElementChild.firstElementChild.style;
        currentArrowStyles.transform = "";
        toggleListItem({ ...listItemStatus, [key]: false });
      }
    }
    return;
  };

  const arrowStyles = {
    left: "6px",
    position: "relative",
    top: "-2px",
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <nav className={className}>
      <div
        className="desktop-nav-segment"
        onMouseOver={
          place === "header" && !isDesktop
            ? (e) => {
                handleMouseOnMenu(e);
              }
            : undefined
        }
        onMouseLeave={
          place === "header" && !isDesktop
            ? () => {
                handleMouseOffMenu();
              }
            : undefined
        }
      >
        <h3
          className={place + "-nav-heading"}
          onClick={
            place === "header" && isDesktop
              ? (e) => {
                  handleMenuClick(e);
                }
              : undefined
          }
        >
          Product
          {place === "header" ? (
            <span>
              <img
                src={isDesktop ? arrowDark : arrowLight}
                style={arrowStyles}
              ></img>
            </span>
          ) : null}
        </h3>
        {listItemStatus["Product"] || place === "footer" ? (
          <div className="animation-box">
            <div className={place === "header" ? "slideIn product" : ""}>
              <ul className={place + "-nav-links"}>
                <li>
                  <a href="/#">Overview</a>
                </li>
                <li>
                  <a href="/#">Pricing</a>
                </li>
                <li>
                  <a href="/#">Marketplace</a>
                </li>
                <li>
                  <a href="/#">Features</a>
                </li>
                <li>
                  <a href="/#">Integrations</a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>

      <div
        className="desktop-nav-segment"
        onMouseOver={
          place === "header" && !isDesktop
            ? (e) => {
                handleMouseOnMenu(e);
              }
            : undefined
        }
        onMouseLeave={
          place === "header" && !isDesktop
            ? (e) => {
                handleMouseOffMenu();
              }
            : undefined
        }
      >
        <h3
          className={place + "-nav-heading"}
          onClick={
            place === "header" && isDesktop
              ? (e) => {
                  handleMenuClick(e);
                }
              : undefined
          }
        >
          Company
          {place === "header" ? (
            <span>
              <img
                src={isDesktop ? arrowDark : arrowLight}
                style={arrowStyles}
              ></img>
            </span>
          ) : null}
        </h3>
        {listItemStatus["Company"] || place === "footer" ? (
          <div className="animation-box" data-menu="Company">
            <div className={place === "header" ? "slideIn company" : ""}>
              <ul className={place + "-nav-links"}>
                <li>
                  <a href="/#">About</a>
                </li>
                <li>
                  <a href="/#">Team</a>
                </li>
                <li>
                  <a href="/#">Blog</a>
                </li>
                <li>
                  <a href="/#">Careers</a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>

      <div
        className="desktop-nav-segment"
        onMouseOver={
          place === "header" && !isDesktop
            ? (e) => {
                handleMouseOnMenu(e);
              }
            : undefined
        }
        onMouseLeave={
          place === "header" && !isDesktop
            ? () => {
                handleMouseOffMenu();
              }
            : undefined
        }
      >
        <h3
          className={place + "-nav-heading"}
          onClick={
            place === "header" && isDesktop
              ? (e) => {
                  handleMenuClick(e);
                }
              : undefined
          }
        >
          Connect
          {place === "header" ? (
            <span>
              <img
                src={isDesktop ? arrowDark : arrowLight}
                style={arrowStyles}
              ></img>
            </span>
          ) : null}
        </h3>
        {listItemStatus["Connect"] || place === "footer" ? (
          <div className="animation-box" data-menu="Connect">
            <div className={place === "header" ? "slideIn connect" : ""}>
              <ul className={place + "-nav-links"}>
                <li>
                  <a href="/#">Contact</a>
                </li>
                <li>
                  <a href="/#">Newsletter</a>
                </li>
                <li>
                  <a href="/#">Linkedln</a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
      {place === "header" ? (
        <>
          <hr></hr>
          <div className="header-nav-buttons">
            <button className="login">Login</button>
            <button className="sign-up">Sign Up</button>
          </div>
        </>
      ) : null}
    </nav>
  );
};

export default Navigation;
