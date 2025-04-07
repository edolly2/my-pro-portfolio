import "./Header.css";
import { useState, useEffect } from "react";
import MobileNav from "../navigation/mobile/MobileNav.jsx";
import LargeNav from "../navigation/large/LargeNav.jsx";
import MobileMenu from "../navigation/mobile/MobileMenu.jsx";
import SiteBrand from "../brand/SiteBrand";

const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const breakpoint = 769;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? (
    <header
      className="header-container"
      style={{
        borderBottomLeftRadius: isMobileMenuActive ? "0" : "0.4rem",
        borderBottomRightRadius: isMobileMenuActive ? "0" : "0.4rem",
      }}
    >
      <SiteBrand />
      <MobileNav
        onMenuClick={() => {
          setIsMobileMenuActive(!isMobileMenuActive);
        }}
      />
      <MobileMenu
        mobileMenuStyle={{ display: isMobileMenuActive ? "flex" : "none" }}
        onMenuItemClick={() => {
          setIsMobileMenuActive(false);
        }}
      />
    </header>
  ) : (
    <header className="header-container">
      <SiteBrand />
      <LargeNav onContactClick={props.onContactClick} />
    </header>
  );
};

export default Header;
