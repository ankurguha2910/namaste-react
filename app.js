import React from "react";
import ReactDOM from "react-dom/client";

//creating an single HTML element
//It creates a React element that is nothing but a javascript object
/*const element = React.createElement("h1",
    {
        id: "heading",
        abc: "xyz"
    },"Hello world from react");
    
    console.log(element); // prints the object created
*/







/**creating a nested HTML element such as
 * <div id="parent">
 *      <div id="child">
 *              <h1>I am h1 tag</h1>
 *      </div>
 * </div>
 **/

/*const heading = React.createElement("div",{
    id: "parent"
},React.createElement("div",{
    id: "child"
},React.createElement("h1",{},"I am h1 tag")));

console.log(heading); // prints the object created
*/






/**
 * creating a nested HTML element with sibling
 * <div id="parent">
 *      <div id ="child">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 * </div>
 * We will be using array of children
 */


/*const heading = React.createElement("div",{
    id: "parent"
}, React.createElement("div",{
    id: "child"
},
[React.createElement("h1",{},"I am an h1 tag"),
React.createElement("h2",{},"I am an h2 tag")
]));

console.log(heading);
*/









/**
 * Creating an HTML element of the following structure
 * <div id="parent">
 *      <div id ="child1">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 *      <div id ="child2">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 * </div>
 */

/*
const heading = React.createElement("div",{id: "parent"},
    [
        React.createElement("div",{id: "child1"},
            [
                React.createElement("h1",{},"This is React practice course"),
                React.createElement("h2",{},"Instructor - Akshay Saini")
            ]
        ),
        React.createElement("div",{id: "child2"},
            [
                React.createElement("h1",{},"I am an h1 tag"),
                React.createElement("h2",{},"I am an h2 tag")
            ]
        )
    ]
)
// creating a root 
const root =  ReactDOM.createRoot(document.getElementById("root"));

// rendered the heading into the root(changes the object, element into an HTML element and adds it to the web page)
root.render(heading);
*/


// Create a React element using JSX
const jsxheading = (<h1 id="heading" className="head" tabIndex="2">
    JSX Heading is HTML type or XML type syntax</h1>);

//const anchor = <a href="https://www.google.com">Google link</a>

console.log(jsxheading);

// React Functional component
// HeadingComponent and HeadingComponent2 are same
/*const HeadingComponent = () => {
    return <h1 className="heading">React Functional comonent</h1>;
};*/

const Title = () => (
<h1 className="title" tabIndex="5">
Another React functional componenet
</h1>
);

const age = 31;
// Component composition
const HeadingComponent2 = () => (
    <div id="container">
        {jsxheading}
        <Title/>
        {Title()}
        <Title></Title>
        <h2>{age}</h2>
        <h1 className="heading">React Functional comonent</h1>
    </div>
);

const element = (
<span>Span element</span>
);

 

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxheading);
//root.render(anchor);
root.render(<HeadingComponent2/>);