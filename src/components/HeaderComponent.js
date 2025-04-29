import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {

    const [newButton, setnewButton] = useState("LogIn");
    const onlineStatus = useOnlineStatus();
    useEffect(() => {
        console.log("UseEffect rendered");
    },[newButton])
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
                    <li className="px-4">Cart</li>
                    <button className="px-4" onClick={() => { 
                        newButton === 'LogIn' ? setnewButton("LogOut") : setnewButton("LogIn")}}>{newButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;