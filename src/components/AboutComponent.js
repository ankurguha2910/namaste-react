import HeaderComponent from "./HeaderComponent";
import UserComponenet from "./UserComponent";
import UserClassComponent from "./UserClassComponent";
import React from "react";


// const AboutComponent = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h3>This is the React practice course from Namaste React!</h3>
//             {/* <UserComponenet name={"Ankur Guha (Function)"}/> */}
//             <UserClassComponent name={"Ankur Guha (Class)"} location={"Kolkata (Class)"}/>
//         </div>
//     )
// }

class AboutComponent extends React.Component
{
    constructor(params)
    {
        super(params);
        console.log("Parent Constructor"); 
    }

    render()
    {
        console.log("Parent render");
        return (
            <div>
                <h1>About Us</h1>
                <h3>This is the React practice course from Namaste React!</h3>
                {/* <UserComponenet name={"Ankur Guha (Function)"}/> */}
                <UserClassComponent name={"1st child (Class)"} location={"Kolkata (Class)"}/>
                
                {/*<UserClassComponent name={"2nd child (Class)"} location={"Kolkata (Class)"}/>
                <UserClassComponent name={"3rd child (Class)"} location={"Kolkata (Class)"}/>*/}
            </div>
        )
    }

    componentDidMount()
    {
        console.log("Parent Component Did Mount");
    }
}

export default AboutComponent;