import React, { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenuComponent from "./components/RestaurantMenuComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ShimmerComponent from "./components/ShimmerComponent";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartComponent from "./components/CartComponent";

const Grocery = lazy(() => {
    return import("./components/GoceryComponent")
});

const AboutComponent = lazy(() => import("./components/AboutComponent"));

const AppComponent = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const data = {
            loggedInUser: "Ankur Guha"
        }
        setUserName(data.loggedInUser);
    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
                element:(
                <Suspense fallback={<h1>Loading...</h1>}>
                    <AboutComponent/>
                    </Suspense>
                )
            },
            {
                path:"/contact",
                element:<ContactComponent/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenuComponent/>
            },
            {
                path:"/grocery",
                element:(
                <Suspense fallback={<ShimmerComponent/>}>
                    <Grocery />
                </Suspense>)
            },
            {
                path:"/cart",
                element: <CartComponent />
            }
        ],
        errorElement:<ErrorComponent/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoutes}/>)