import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body"
import Contact from "./components/Contact"; 
import About from "./components/About"
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const App = () => (
  <div className="App">
    <Header />
    <Body />
  </div> 
);

const appRouter=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)