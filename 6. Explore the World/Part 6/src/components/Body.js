import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  
  const [listOfRestaurant, setlistOfRestaurant] = useState({data: [], filtered: false})
  const [searchText, setsearchText] = useState('')

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
              // console.log(liveResData)
              if(listOfRestaurant.filtered) {
                setlistOfRestaurant({data: liveResData, filtered: !listOfRestaurant.filtered})
                console.log(listOfRestaurant)
              } else {
                const filteredList = listOfRestaurant.data.filter(
                  (res) => res.info.avgRating > 4.4 
                )
                setlistOfRestaurant({data: filteredList, filtered: !listOfRestaurant.filtered})
                console.log(listOfRestaurant)
              }
            }
          } 
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input 
            type="text" 
            className="search-box"
            onChange={ (e) => { 
              setsearchText(e.target.value) 
            }}
            value={searchText} 
          />
          <button 
            className="search-btn"
            onClick={ () => {
              const filterData=listOfRestaurant.data.filter( (restaurant)=> {
                // console.log(restaurant.info.name.includes(searchText))
                return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              })
              // console.log(filterData)
              if(searchText==='')
                setlistOfRestaurant({data:liveResData, filtered:listOfRestaurant.filtered})
              else
                setlistOfRestaurant({data: filterData, filtered: listOfRestaurant.filtered})
            }}
          >Search</button>
        </div>
      </div>
      {!listOfRestaurant.data.length ? <Shimmer/>: 
        <div className="res-container">
        {listOfRestaurant.data.map((restaurant) => (
          <RestaurantCard 
            key={restaurant.info.id}
            resData={restaurant} 
          />))
        }
      </div>
      }
    </div>
  )}

  export default Body;