import { useState, useEffect } from "react"
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
       fetchMenu();
    }, [])
    
    fetchMenu = async () => {
       const data = await fetch(
           RESTAURANT_MENU_API + resId
       );
       const json = await data.json()
       setResInfo(json.data)
       console.log(json.data)
    }
    return resInfo;
}

export default useRestaurantMenu