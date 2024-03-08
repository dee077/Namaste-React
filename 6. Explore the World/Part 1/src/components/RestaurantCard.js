import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, costForTwo, cuisines, sla, avgRating} = resData?.info
    return (
      <div className="res-card">
        <img 
          className="res-logo"
          src={ CDN_URL + cloudinaryImageId }
          alt='Restaurant'
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div> )
  }

  export default RestaurantCard;