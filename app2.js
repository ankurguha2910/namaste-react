import React from "react";
import ReactDOM from "react-dom/client";
// Assignment for Tutorial 3
/*
Using React.createElement()
const nestedHeaderElement = React.createElement("div",{
    class:"title"
},[
    React.createElement("h1",{},"I am a h1 element"),
    React.createElement("h2",{},"I am a h2 element"),
    React.createElement("h3",{},"I am a h3 element")
]);
*/





/* Using JSX
const nestedHeaderElement = (
    <div className="title">
<h1>I am a h1 tag</h1>
<h2>I am a h2 tag</h2>
<h3>I am a h3 tag</h3>
    </div>
);
*/






/* composition of component
const NestedHeaderElement = () => {
    return (<div className="title">
    <h1>I am a h1 tag</h1>
    <h2>I am a h2 tag</h2>
    <h3>I am a h3 tag</h3>
        </div>);
};

const TitleComponent = () => (
    <div className="container">
        <NestedHeaderElement/>
        <hl>Line Break</hl>
        {NestedHeaderElement()}
        <hl>Line Break</hl>
        <NestedHeaderElement></NestedHeaderElement>
    </div>
);
*/







const HeaderComponent = () => (
    <div>
        <img className="logo" src="https://www.shutterstock.com/image-vector/search-icon-vector-magnifying-glass-260nw-2421386915.jpg"></img>
        <input className="inputBox" type="text" placeholder="Enter your text"></input>
        <img className="icon" src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"></img>
    </div>
);
const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);