import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CartIcon } from "../utils/Icons";

const Header = () => {
  
  const [btnName, setbtnName] = useState('Login')

  const onlineStatus = useOnlineStatus()

  return (
    <div className="flex justify-between shadow-lg m-3">
      <div className="flex items-center">
        <img className=" w-28" 
             src={ LOGO_URL }
             alt="logo" 
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : { onlineStatus ? '✅':'🔴' }</li>
          <li><Link to='/' className="px-4">Home</Link></li>
          <li><Link to='/about' className="px-4">About Us</Link></li>
          <li><Link to='/contact' className="px-4">Contact Us</Link></li>
          <li><Link to='/grocery' className="px-4">Grocery</Link></li>
          <li className="px-4"><CartIcon /></li>
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