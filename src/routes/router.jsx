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
import AddNewClasses from "../Dashboard/InstructorPages/AddNewClasses";
import MyAllClasses from "../Dashboard/InstructorPages/MyAllClasses";
import EnrolledStudents from "../Dashboard/InstructorPages/EnrolledStudents";
import ManageUsers from "../Dashboard/AdminPages/ManageUsers";
import ManageClasses from "../Dashboard/AdminPages/ManageClasses";
import AdminHome from "../Dashboard/AdminPages/AdminHome";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import Layout from "../Layout/Layout";
import Error from "../Error/Error";
import UserProfile from "../UserProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/instructors',
                        element: <Instructors></Instructors>
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
                        path: '/profile',
                        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
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
            },
            // instructors pages
            {
                path: '/dashboard/addnewclass',
                element: <AddNewClasses></AddNewClasses>
            },
            {
                path: '/dashboard/myallclasses',
                element: <MyAllClasses></MyAllClasses>
            },
            {
                path: '/dashboard/enrolledstudents',
                element: <EnrolledStudents></EnrolledStudents>
            },
            // admin pages
            {
                path: '/dashboard/admin/manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: '/dashboard/admin/manageclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: '/dashboard/admin/adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            }
        ]
    }
]);

export default router;