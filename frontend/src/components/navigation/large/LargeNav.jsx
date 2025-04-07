import "./LargeNav.css";
import { NavLink } from "react-router-dom";
import Button from "../../button/Button.jsx";
// import DarkMode from './DarkMode';

const LargeNav = (props) => {
  return (
    <div className="large-nav-container" style={props.DesktopNavStyle}>
      <nav className="large-nav">
        <ul className="large-nav-list">
          {/* <DarkMode /> */}
          <li className="large-nav-list-item nav-link">
            <NavLink
              className="nav-link"
              style={{ marginLeft: "2.4rem" }}
              onClick={props.onNavLinkClick}
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li className="large-nav-list-item nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li className="large-nav-list-item nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/skills"
            >
              SKILLS
            </NavLink>
          </li>
          <li className="large-nav-list-item nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/projects"
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="large-nav-list-item nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
          <li className="large-nav-list-item nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/blog"
            >
              <Button text="Hire Me" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LargeNav;
