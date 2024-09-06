import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="image-container">
                <img className="image" src={LOGO_URL}/>
            </div>
            <div className="nav-container">
                <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;