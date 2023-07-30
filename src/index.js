import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login'
import Header from './components/Header';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Transactions from './components/Trancsations';
import Profile from './components/Profile';
import './App.css';


const AppLayOut= () => {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayOut/>,
    children:[
      {
        path:"/app",
        element:<AppLayOut/>
      },
      
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/transactions",
        element:<Transactions/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
    ]
  }
]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
