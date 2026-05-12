import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast'; 
import router from "./router/Router"; 
import { TimelineProvider } from "./context/TimelineContext"; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <TimelineProvider>
      
      
      <RouterProvider router={router} />
      
      
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />

    </TimelineProvider>
  </React.StrictMode>
);