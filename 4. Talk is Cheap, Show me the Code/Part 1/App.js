import React from "react"
import ReactDOM from "react-dom/client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

/*
  * Header
  *   - Logo
  *   - Nav Items
  * Body
  *   - Search
  *   - Restaurant Container
  *     - Restaurant Card
  *       - Image
  *       - Name of Restaurant, Star Rating, Cuisine, Delivery time
  * Footer
  *   - Copyright
  *   - Links
  *   - Address
  *   - Contact  
*/


const CartIcon = () => <FontAwesomeIcon icon={faShoppingCart} />;

const Header = () => (
    <div className="header">
      <div className="logo-container">
        <img className="logo" 
             src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png" 
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

const RestaurantCard = () => (
  <div className="res-card">
    <img 
      className="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/505f02a6d9aa1035b486035ae32dfd38" 
      alt="" 
    />
    <h3>Biryanipur</h3>
    <h4>Biryani, North Indian, Asian</h4>
    <h4>4.3 Stars</h4>
    <h4>25 mins</h4>
  </div>  
)

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
)

const App = () => (
  <div className="App">
    <Header />
    <Body />
  </div> 
);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)