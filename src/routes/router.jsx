import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Banner from "../Pages/Banner/Banner";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import MyClasses from "../Pages/MyClasses/MyClasses";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/classes',
                element: <MyClasses></MyClasses>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);

export default router;