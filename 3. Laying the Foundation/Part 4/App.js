import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => (
    <h1 className="title">
        Namaste React form Title Componet 🚀
    </h1> 
);

const HeadingComponent = () => (
  <div className="container">
    <Title />
    <h1 className="heading">Namaste React form Heading Component 🚀</h1>
  </div> 
);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent/>)