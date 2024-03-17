import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body"
import Contact from "./components/Contact"; 
import About from "./components/About"
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))

const App = () => (
  <div className="App">
    <Header />
    <Outlet />
  </div> 
);

const appRouter=createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      },
      {
        path: '/grocery',
        element: (<Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>),
      }
    ],
    errorElement: <Error />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)