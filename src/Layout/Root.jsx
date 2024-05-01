import {Outlet} from "react-router-dom"
import { NavigationBar } from "../Pages/NavigationBar";
import Footer from "../Pages/Footer";
import { Toaster } from "react-hot-toast";
const Root = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
            
        </div>
    );
};

export default Root;