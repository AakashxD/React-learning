const heading=React.createElement("h1",{id:"heading"},"hello World");
console.log(heading); // object
const root=ReactDOM.createRoot(document.getElementById("root"));// place where all react code will  run
root.render(heading); // object to tag and put it in on browser