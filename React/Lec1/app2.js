const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm an H1 tag"),React.createElement("h2",{},"I'm an H1 tag")]
)// for multiple use array of childen
);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// ReactElement(Oject)=>HTML(broswe understand)
// JSX react can only using only JSx but in real it make our life is easier.
