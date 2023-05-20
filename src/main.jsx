import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routs/Routs.jsx';
import AuthProviders from './porviders/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='px-14 mx-auto'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>
  </div>
)
