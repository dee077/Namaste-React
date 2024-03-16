import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null) 
  const { resId } = useParams()

  useEffect(() => {
    fetchMenu();
  }, [])

  fetchMenu = async () => {
    const data = await fetch(
        RESTAURANT_MENU_API + resId
    );
    const json = await data.json()
    setResInfo(json.data)
    // console.log(json)
  }

  if( !resInfo) return <Shimmer />

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  console.log(itemCards)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(', ')} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {'₹'}
            {item.card.info.price/100 || item.card.info.defaultPrice/100}
          </li>
        ))}
      </ul>
    </div>  
  );
}

export default RestaurantMenu