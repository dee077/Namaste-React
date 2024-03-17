import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import { RESTAURANT_DATA_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  
  const [listOfRestaurant, setlistOfRestaurant] = useState([])
  const [filteredListOfRestaurant, setfilteredListOfRestaurat] = useState({data: [], dataLoading:true,  filtered: false})
  const [searchText, setsearchText] = useState('')
  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
        RESTAURANT_DATA_API
    );
    const json = await data.json();
    liveResData=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setlistOfRestaurant(liveResData)
    setfilteredListOfRestaurat({data: liveResData, dataLoading: false, filtered: false})
  }

  const onlineStatus = useOnlineStatus()
  if(!onlineStatus) return <h1>Looks like you are offline!! Please check your internet connection...</h1>

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          onClick={ () => {
              // console.log(liveResData)
              if(filteredListOfRestaurant.filtered) {
                setfilteredListOfRestaurat({data: listOfRestaurant, filtered: !filteredListOfRestaurant.filtered})
              } else {
                const filteredList = filteredListOfRestaurant.data.filter(
                  (res) => res.info.avgRating > 4.3 
                )
                setfilteredListOfRestaurat({data: filteredList, filtered: !filteredListOfRestaurant.filtered})
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
              const filterData=listOfRestaurant.filter( (restaurant)=> {
                // console.log(restaurant.info.name.includes(searchText))
                return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              })
              // console.log(filterData)
              setfilteredListOfRestaurat({data: filterData, filtered: filteredListOfRestaurant.filtered})
            }}
          >Search</button>
        </div>
      </div>
      {filteredListOfRestaurant.dataLoading ? 
      ( <Shimmer/> ) : !filteredListOfRestaurant.data.length ? <h1 className="no-data">No data found</h1> : 
        <div className="res-container">
        {filteredListOfRestaurant.data.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurant/'+restaurant.info.id}
          >
            <RestaurantCard 
              
              resData={restaurant} 
            />
          </Link>))
        }
      </div>
      }
    </div>
  )}

  export default Body;