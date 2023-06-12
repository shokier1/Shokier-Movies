import React from 'react';
import ReactDOM from 'react-dom/client';
import {createHashRouter, BrowserRouter ,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './style.css';
import App from './App';
const router = createHashRouter([])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
  <React.StrictMode>
    <BrowserRouter>
     <App/>
       <RouterProvider router={router} />
    </BrowserRouter>
  
  </React.StrictMode>
);

