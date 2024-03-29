import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router/index';
import {RouterProvider} from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);