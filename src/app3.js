import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppComponent = () => {
    return (
        <div className="container">
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
}

const appRoutes = createBrowserRouter([
    {
        path:"/",
        element:<AppComponent/>,
        children:[
            {
                path:"/",
                element:<BodyComponent/>
            },
            {
                path:"/about",
                element:<AboutComponent/>
            },
            {
                path:"/contact",
                element:<ContactComponent/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenuComponent/>
            }
        ],
        errorElement:<ErrorComponent/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes}/>)