import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props
    const {loggedInUser} = useContext(UserContext);
    // object destructuring
    const { cloudinaryImageId, name, costForTwo, cuisines, avgRatingString, sla  } = resData?.info;
    return (
        <div className="w-[250px] bg-gray-100 rounded-lg p-4 m-4 hover:bg-gray-200 transition-all">
            <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold text-lg py-4">{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    )
}

//The following function is a high-order component, it receives a componenet, enhances it and returns another component
export const RestaurantCardOffer = (RestaurantCard) => {
    return (props) => {
        const {resData} = props;
        const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3;
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                   { header + " " + subHeader }
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;