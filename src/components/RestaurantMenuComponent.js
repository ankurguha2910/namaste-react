import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenuComponent = () => {
    const {resId} = useParams();
    const resData = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    if (resData === null)
    {
       return <ShimmerComponent/>
    }

    const { name, cuisines, costForTwoMessage } = resData?.cards[2]?.card?.card?.info;
   
    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
        {categories.map((category, index) => 
        <RestaurantCategory 
        key={category?.card?.card.title}
        data={category?.card?.card}
        showItems={index === showIndex}
        setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        />)}
    </div>
    );
}

export default RestaurantMenuComponent;