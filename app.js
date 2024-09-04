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
//creating a root 
const root =  ReactDOM.createRoot(document.getElementById("root"));

//rendered the heading into the root(changes the object, element into an HTML element and adds it to the web page)
root.render(heading);