import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const BodyComponent = () => {
    // local state variable - super powerful variable
    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-button" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRatingString > 4.4)
                    setlistOfRestaurants(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                )}
            </div>
        </div>
    )
}

export default BodyComponent;