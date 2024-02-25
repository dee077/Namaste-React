import React from "react"
import ReactDOM from "react-dom/client"

const jsxHeading = (
    <h1 id="heading" className="heading">
        Namaste React form JSX 🚀
    </h1> 
);
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(jsxHeading)