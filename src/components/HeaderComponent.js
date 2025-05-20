import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {

    const [newButton, setnewButton] = useState("LogIn");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    //subscribing to the store using a selector by using useSelector() hook
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="image-container">
                <img className="w-44" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "Online" : "Offline"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <button className="px-4"
                    onClick={
                        () => {
                        newButton === 'LogIn' ? setnewButton("LogOut") : setnewButton("LogIn")}
                        }>{newButton}
                    </button>
                    <li className="px-4 font-semibold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;