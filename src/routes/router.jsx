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
                        element: <StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
                    },
                    {
                        path: '/dashboard/enrolled',
                        element: <StudentRoute><MyEnrolledClasses></MyEnrolledClasses></StudentRoute>
                    },
                    {
                        path: '/dashboard/paymenthistory',
                        element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
                    },
                    // instructors pages
                    {
                        path: '/dashboard/addnewclass',
                        element: <InstructorRoute><AddNewClasses></AddNewClasses></InstructorRoute>
                    },
                    {
                        path: '/dashboard/myallclasses',
                        element: <InstructorRoute><MyAllClasses></MyAllClasses></InstructorRoute>
                    },
                    {
                        path: '/dashboard/enrolledstudents',
                        element: <InstructorRoute><EnrolledStudents></EnrolledStudents></InstructorRoute>
                    },
                      // admin pages
                    {
                        path: '/dashboard/manageusers',
                        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
                    },
                    {
                        path: '/dashboard/manageclasses',
                        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
                    },
                    {
                        path: '/dashboard/adminhome',
                        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
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