import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import Blogs from "../components/pages/Blogs";
import AddAToys from "../components/home/AddAToys";
import MyToys from "../components/home/MyToys";
import AllToys from "../components/home/AllToys";
import Update from "../components/pages/Update";
import Details from "../components/pages/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/addToys',
          element:<PrivateRoute><AddAToys></AddAToys></PrivateRoute>
        },
        {
          path:'/myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path:'/allToys',
          element:<AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;