import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Register from "../components/login/Register";
import Blogs from "../components/pages/Blogs";
import AddAToys from "../components/home/AddAToys";
import MyToys from "../components/home/MyToys";
import AllToys from "../components/home/AllToys";

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
          element:<AddAToys></AddAToys>
        },
        {
          path:'/myToys',
          element:<MyToys></MyToys>
        },
        {
          path:'/allToys',
          element:<AllToys></AllToys>
        }
      ]
    },
  ]);

  export default router;