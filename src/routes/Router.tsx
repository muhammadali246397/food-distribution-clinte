import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import AllSupplies from "../pages/AllSupplies";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/allsuplies',
                element:<AllSupplies />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/dashboard',
                element:<Dashboard />
            }
        ]
    }
])

export default Router