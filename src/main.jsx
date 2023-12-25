import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import "./index.css";
import { router } from './Routes/PublicRoutes/PublicRoutes';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <DndProvider backend={HTML5Backend}>
      <RouterProvider router={router} />
    </DndProvider>      
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        limit={1}
        hideProgressBar
        pauseOnFocusLoss={false}
        theme="dark"
        />
    </AuthProvider>
  </React.StrictMode>
);