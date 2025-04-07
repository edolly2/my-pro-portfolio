import "./SiteBrand.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/my-logo.png";

const SiteBrand = (props) => {
  return (
    <div className="site-brand-wrapper">
      <Link to="/">
        <img
          className={`site-brand-img ${props.className || ""}`}
          src={Logo}
          alt="Logo with the letters E and D"
        />
      </Link>
    </div>
  );
};

export default SiteBrand;
