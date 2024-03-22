import { DownArrow, UpArrow } from "../utils/Icons";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItem, setShowItem}) => {
    
    const showItemList = () => {
        setShowItem(!showItem)
    }
    // console.log('Child ',index, ': ', index, accordionToggle)
    return (
    <div className="w-6/12 mx-auto ">
        <div className="flex justify-between bg-gray-50 rounded-lg shadow-lg py-4 my-6 cursor-pointer" onClick={showItemList}>
            <span className="mx-10 font-bold">{data.title} ({data?.itemCards?.length})</span>
            {showItem ? <UpArrow /> : <DownArrow />}
        </div>
        {showItem && <ItemList item={data.itemCards}/> }
    </div>      
  )
}

export default RestaurantCategory;