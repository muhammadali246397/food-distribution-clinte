import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import AllSupplies from "../pages/AllSupplies";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import AllSupply from "../pages/dashboard/AllSupply";
import CreateSupply from "../pages/dashboard/CreateSupply";

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

        ]
      
    },
    {
        path:'/dashboard',
        element:<DashboardLayout />,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard />
            },
            {
                path:'/dashboard/allSupply',
                element:<AllSupply />
            },
            {
                path:'/dashboard/creatSupply',
                element:<CreateSupply />
            }
        ]
    }
])

export default Router