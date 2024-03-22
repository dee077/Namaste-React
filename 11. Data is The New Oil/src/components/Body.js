import RestaurantCard, { withPromotedLabel } from "./RestaurantCard"
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import { RESTAURANT_DATA_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  
  const [listOfRestaurant, setlistOfRestaurant] = useState([])
  const [filteredListOfRestaurant, setfilteredListOfRestaurat] = useState({data: [], dataLoading:true,  filtered: false})
  const [searchText, setsearchText] = useState('')
  const {loggedInUser, setUserName} = useContext(UserContext) 
  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
        RESTAURANT_DATA_API
    );
    const json = await data.json();
    console.log(json)
    const liveResData=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // console.log(liveResData)
    setlistOfRestaurant(liveResData)
    setfilteredListOfRestaurat({data: liveResData, dataLoading: false, filtered: false})
    // console.log(filteredListOfRestaurant.data)
  }

  const onlineStatus = useOnlineStatus()
  if(!onlineStatus) return <h1>Looks like you are offline!! Please check your internet connection...</h1>

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  return (
    <div className="body">
      <div className="filter flex items-center">
        <div className="m-4 p-4 flex items-center">
          <button 
            className="filter-btn px-4 py-2 bg-gray-100 rounded-lg shadow-lg" 
            onClick={ () => {
                // console.log(liveResData)
                if(filteredListOfRestaurant.filtered) {
                  setfilteredListOfRestaurat({data: listOfRestaurant, dataLoading:setfilteredListOfRestaurat.dataLoading, filtered: !filteredListOfRestaurant.filtered})
                } else {
                  const filteredList = filteredListOfRestaurant.data.filter(
                    (res) => res.info.avgRating > 4.3 
                  )
                  setfilteredListOfRestaurat({data: filteredList,dataLoading:setfilteredListOfRestaurat.dataLoading, filtered: !filteredListOfRestaurant.filtered})
                }
              }
            } 
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4">
          <input 
            type="text" 
            className="border border-solid border-black"
            onChange={ (e) => { 
              setsearchText(e.target.value) 
            }}
            value={searchText} 
          />
          <button 
            className="px-4 py-1 bg-green-100 m-4 rounded-lg shadow-lg"
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
        <div className="m-4 p-4 flex items-center">
            <label className="mx-2">User Name:</label>
            <input 
              className="border border-black" 
              type="text" 
              value={loggedInUser}
              onChange={(e) => {setUserName(e.target.value)}} 
            />
        </div>
      </div>
      {filteredListOfRestaurant.dataLoading ? 
      ( <Shimmer/> ) : !filteredListOfRestaurant.data?.length ? <h1 className="no-data">No data found</h1> : 
        <div className="res-container flex flex-wrap items-start mx-8">
        {filteredListOfRestaurant.data.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurant/'+restaurant.info.id}
          >
            {restaurant.info.isOpen ? 
              (<RestaurantCardPromoted resData={restaurant} />) : 
              (<RestaurantCard resData={restaurant} />)}
          </Link>))
        }
      </div>
      }
    </div>
  )}

  export default Body;