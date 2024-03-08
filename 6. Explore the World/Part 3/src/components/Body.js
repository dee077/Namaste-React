import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";

const Body = () => {
  
  const [listOfRestaurant, setlistOfRestaurant] = useState({data: [], filtered: false})

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'  
    );
    const json = await data.json();
    liveResData=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setlistOfRestaurant({data:liveResData, filtered: false})
  }

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