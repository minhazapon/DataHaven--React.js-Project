import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './raw css/Vanila.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import AddInformation from './AddInformation/AddInformation';
import Service from './service file/Service';
import Contact from './contact file/Contact';
import SearchNatural from './SearchItems file/SearchNatural';
import AllSearchItems from './SearchItems file/AllSearchItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddInformation></AddInformation>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/serviceCard",
        element: <Service></Service>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/allItems",
        element: <AllSearchItems></AllSearchItems>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
