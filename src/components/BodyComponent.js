import RestaurantCard, {RestaurantCardOffer} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
    // local state variable - super powerful variable
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);

    const [filteredList, setfilteredList] = useState([]);

    const [searchText, setsearchText] = useState("");
    const OfferRestaurants = RestaurantCardOffer(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, [])
    const { loggedInUser, setUserName } = useContext(UserContext);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4770904&lng=88.3404497&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        //optional chaining using the ? operator
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
    {
        return (<h1>You are offline! Please check your internet connection!!</h1>);
    }

    // if(filteredList.length === 0)
    // {
    //     return (<h1 className="text-center font-bold text-2xl py-6">Record not found</h1>)
    // }

    //Conditional Rendering
    return listOfRestaurants.length === 0 ? <ShimmerComponent/> : (
        <div className="body">
            <div className="flex">
                <div className="m-1 p-1">
                    <input type="text" className="px-4 py-2 m-2 border border-solid rounded-lg border-green-200" value={searchText} onChange={(e) => {
                        setsearchText(e.target.value);
                    }}></input>
                    <button className="bg-green-200 px-4 py-2 m-2 rounded-lg" onClick={() => {
                        const filteredData =  listOfRestaurants.filter((res) => {
                            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setfilteredList(filteredData)
                    }}>Search</button>
                </div>
                <div className="m-1 p-1">
                <button 
                className="bg-green-200 px-4 py-2 m-2 rounded-lg" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRatingString > 4.4)
                    setfilteredList(filteredList)
                }}>Top Rated Restaurant</button>
                </div>
                <div className="m-1 p-1">
                    <label>User Name : </label>
                    <input className="p-2 border border-black" value={loggedInUser} onChange={(e) => {
                        setUserName(e.target.value);
                    }}></input>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredList.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
                        {
                        restaurant?.info?.aggregatedDiscountInfoV3 ? (<OfferRestaurants resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)
                        }</Link>)
                )}
            </div>
        </div>
    )
}

export default BodyComponent;