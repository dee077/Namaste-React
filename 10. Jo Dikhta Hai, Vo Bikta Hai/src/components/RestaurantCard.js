import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, costForTwo, cuisines, sla, avgRating} = resData?.info
    return (
      <div className="m-4 p-4 w-52 bg-slate-100 hover:bg-slate-200 shadow-lg rounded-lg">
        <img 
          className="rounded-lg"
          src={ CDN_URL + cloudinaryImageId }
          alt='Restaurant'
        />
        <h3 className="font-bold py-2">{name}</h3>
        <h4 className="py-1">{cuisines.join(', ')}</h4>
        <h4 className="py-1">{costForTwo}</h4>
        <h4 className="py-1">{avgRating}</h4>
        <h4 className="py-1">{sla.deliveryTime} minutes</h4>
      </div> )
  }

  export default RestaurantCard;