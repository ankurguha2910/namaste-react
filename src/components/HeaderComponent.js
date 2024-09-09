import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {

    const [newButton, setnewButton] = useState("LogIn");
    return (
        <div className="header">
            <div className="image-container">
                <img className="image" src={LOGO_URL}/>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => { 
                        newButton === 'LogIn' ? setnewButton("LogOut") : setnewButton("LogIn")}}>{newButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;