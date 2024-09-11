import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import { MENU_API_URL} from "../utils/constants";

const RestaurantMenuComponent = () => {
    const [resData, setresData] = useState(null);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenu();
    },[]);
    

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setresData(json.data);
    }

    if (resData === null)
    {
       return <ShimmerComponent/>
    }

    const { name, cuisines, costForTwoMessage, sla, avgRatingString } = resData?.cards[2]?.card?.card?.info;
   
    const {itemCards} = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{avgRatingString}  stars - {costForTwoMessage}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{sla.slaString}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => {
                return <li key={item.card.info.id}>{item.card.info.name} - {" Rs. "}{item.card.info.price / 100}</li>
            })}
        </ul>
    </div>
    );
}

export default RestaurantMenuComponent;