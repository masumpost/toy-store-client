import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/home/Home";
import Login from "../components/home/Login";

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
        }
      ]
    },
  ]);

  export default router;