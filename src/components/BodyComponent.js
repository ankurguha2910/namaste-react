import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";

const BodyComponent = () => {
    // local state variable - super powerful variable
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    const [filteredList, setfilteredList] = useState([]);

    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4770904&lng=88.3404497&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        //optional chaining
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //Conditional Rendering
    return listOfRestaurants.length === 0 ? <ShimmerComponent/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="seach-bar" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }}></input>
                    <button className="search-button" onClick={() => {
                        const filteredData =  listOfRestaurants.filter((res) => {
                            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setfilteredList(filteredData);
                    }}>Search</button>
                </div>
                <button 
                className="filter-button" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRatingString > 4.4)
                    setlistOfRestaurants(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredList.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)
                )}
            </div>
        </div>
    )
}

export default BodyComponent;