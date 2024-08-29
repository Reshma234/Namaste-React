// const heading = React.createElement("h1",{id:"heading"},"Hello from React");
// // args, 1- what tag we need to create, 2- object, 3- what we have to put in tag
// const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = 
React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child"},
            [React.createElement("h1",{id:"heading"},"I'm h1 tag"),
             React.createElement("h2",{id:"heading"},"I'm h2 tag")]
            ),
            React.createElement(
                "div",
                {id:"child2"},
                [React.createElement("h1",{id:"heading"},"I'm h1 tag"),
                 React.createElement("h2",{id:"heading"},"I'm h2 tag")]
                )
    ])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);