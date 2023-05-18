import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;