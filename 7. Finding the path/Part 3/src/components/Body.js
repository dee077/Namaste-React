import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import { RESTAURANT_DATA_API } from "../utils/constants";

const Body = () => {
  
  const [listOfRestaurant, setlistOfRestaurant] = useState([])
  const [filteredListOfRestaurat, setfilteredListOfRestaurat] = useState({data: [], dataLoading:true,  filtered: false})
  const [searchText, setsearchText] = useState('')
  console.log(useState('AAA'))
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

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          onClick={ () => {
              // console.log(liveResData)
              if(filteredListOfRestaurat.filtered) {
                setfilteredListOfRestaurat({data: listOfRestaurant, filtered: !filteredListOfRestaurat.filtered})
              } else {
                const filteredList = filteredListOfRestaurat.data.filter(
                  (res) => res.info.avgRating > 4.3 
                )
                setfilteredListOfRestaurat({data: filteredList, filtered: !filteredListOfRestaurat.filtered})
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
              setfilteredListOfRestaurat({data: filterData, filtered: filteredListOfRestaurat.filtered})
            }}
          >Search</button>
        </div>
      </div>
      {filteredListOfRestaurat.dataLoading ? 
      ( <Shimmer/> ) : !filteredListOfRestaurat.data.length ? <h1 className="no-data">No data found</h1> : 
        <div className="res-container">
        {filteredListOfRestaurat.data.map((restaurant) => (
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