import "./MobileNav.css";
import { CgMenuGridO } from "react-icons/cg";

const MobileNav = (props) => {
  return (
    <div className="mobile-nav-container">
      {/* TODO:CHANGED TO MOBILE-Nav-Container from nav-container */}
      {/* <DarkMode /> */}
      <CgMenuGridO className="icon menu-icon" onClick={props.onMenuClick} />
    </div>
  );
};

export default MobileNav;
