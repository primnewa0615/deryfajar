import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login';
import Dasboard from './pages/dasboard';
import PrivateRoute from './pages/PrivateRoute';
import Register from './pages/register';

const router = createBrowserRouter([
  { path: "/", element: < Login />},
  { path: "/register", element: < Register /> },
  { path: "/dashboard", element: < Dasboard /> },
  { path: "/secret", element: < PrivateRoute path='/secret' /> },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
