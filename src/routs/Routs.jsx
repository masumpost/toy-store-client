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
          loader: () => fetch('https://toy-store-server.vercel.app/toys')
        },
        {
          path:'/allToys',
          element:<AllToys></AllToys>,
          loader: () => fetch('https://toy-store-server.vercel.app/toys')
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params}) => fetch(`https://toy-store-server.vercel.app/toys/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader:({params}) => fetch(`https://toy-store-server.vercel.app/toys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;