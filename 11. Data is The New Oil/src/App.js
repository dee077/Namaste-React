import React, { Suspense, lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body"
import Contact from "./components/Contact"; 
import About from "./components/About"
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))

const App = () => {

  // Authentication
  const [userName, setUserName] = useState('')
  useEffect(() =>{
    const data={
      name: 'Deepanshu Sahu',
    };
    setUserName(data.name)
  }, [])

  return <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="App">
      <Header />
      <Outlet />
    </div> 
  </UserContext.Provider>
};

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