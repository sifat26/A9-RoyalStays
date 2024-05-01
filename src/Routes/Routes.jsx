import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import { NavigationBar } from "../Pages/NavigationBar";
import Footer from "../Pages/Footer";
import { Register } from "../Pages/Estate/Register";
import Login from "../Pages/Estate/Login";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import { UserProfile } from "../Pages/UserProfile";
import AboutUs from "../Pages/AboutUs";
import Error from "../Pages/Error";
import Details from "../Pages/Estate/Details";
const routes = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/navbar',
                element:<NavigationBar></NavigationBar>
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
                path:'/footer',
                element:<Footer></Footer> 

            },
            {
                path:'/updateprofile',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:'/userprofile',
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path:'/aboutus',
                element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            },
            {
                path:'/details/:id',
                element:(<PrivateRoute><Details></Details></PrivateRoute>
                ),
                loader:()=>fetch('/estatedata.json')
            }
            
        ]
    }
]);
export default routes;