import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuComponent = () => {
    const {resId} = useParams();
    const resData = useRestaurantMenu(resId);

    if (resData === null)
    {
       return <ShimmerComponent/>
    }

    const { name, cuisines, costForTwoMessage, sla, avgRatingString } = resData?.cards[2]?.card?.card?.info;
   
    const {itemCards} = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log(categories);
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