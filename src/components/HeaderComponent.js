import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

    const [newButton, setnewButton] = useState("LogIn");
    useEffect(() => {
        console.log("UseEffect rendered");
    },[newButton])
    return (
        <div className="header">
            <div className="image-container">
                <img className="image" src={LOGO_URL}/>
            </div>
            <div className="nav-container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => { 
                        newButton === 'LogIn' ? setnewButton("LogOut") : setnewButton("LogIn")}}>{newButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;