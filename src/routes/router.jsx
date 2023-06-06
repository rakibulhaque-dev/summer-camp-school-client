import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {

        }
      ]
    },
  ]);
  
  export default router;