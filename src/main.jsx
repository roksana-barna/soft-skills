import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Main/Main.jsx';
import Home from './Pages/Home/Home.jsx';
import AboutUs from './Pages/About/AboutUs.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>,
      },
    ]
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-full mx-auto bg-black lg:px-20'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
