import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react";

const Body = () => {
  
  const [listOfRestaurant, setlistOfRestaurant] = useState({data: resList, filtered: false})

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          onClick={ () => {
              if(listOfRestaurant.filtered) {
                setlistOfRestaurant({data: resList, filtered: !listOfRestaurant.filtered})
              } else {
                const filteredList = resList.filter(
                  (res) => res.info.avgRating > 4.3 
                )
                setlistOfRestaurant({data: filteredList, filtered: !listOfRestaurant.filtered})
              }
            }
          } 
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.data.map((restaurant) => (
          <RestaurantCard 
            key={restaurant.info.id}
            resData={restaurant} 
          />))
        }
      </div>
    </div>
  )}

  export default Body;