import { LOGO_URL } from "../utils/constants";
import CartIcon from "./CartIcon";

const Header = () => (
    <div className="header">
      <div className="logo-container">
        <img className="logo" 
             src={ LOGO_URL }
             alt="logo" 
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><CartIcon /></li>
        </ul>
      </div>
    </div>
);

export default Header;