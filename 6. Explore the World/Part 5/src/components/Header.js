import { LOGO_URL } from "../utils/constants";
import CartIcon from "./CartIcon";
import { useState } from "react";

const Header = () => {
  
  const [btnName, setbtnName] = useState('Login')

  return (
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
          <li>
            <button className="login-btn" 
              onClick={()=>{ btnName=='Login' ? setbtnName('Logout'): setbtnName('Login') }} >
                {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
)};

export default Header;