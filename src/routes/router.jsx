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
import PopulerClasses from "../Pages/PopulerClasses/PopulerClasses";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MySelectedClasses from "../Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";


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
                element: <PrivateRoute><Instructors></Instructors></PrivateRoute>
            },
            {
                path: '/classes',
                element: <MyClasses></MyClasses>
            },
            {
                path: '/popularclass',
                element: <PopulerClasses></PopulerClasses>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard/myclass',
                        element: <MySelectedClasses></MySelectedClasses>
                    },
                    {
                        path: '/dashboard/enrolled',
                        element: <MyEnrolledClasses></MyEnrolledClasses>
                    },
                    {
                        path: '/dashboard/paymenthistory',
                        element: <PaymentHistory></PaymentHistory>
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/reg',
        element: <Register></Register>
    },
]);

export default router;