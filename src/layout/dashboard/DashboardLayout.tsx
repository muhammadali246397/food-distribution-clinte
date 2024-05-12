import { FaArrowAltCircleLeft, FaHome } from "react-icons/fa";
import { MdDashboard, MdPostAdd } from "react-icons/md";
import { RiDatabaseFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex justify-between gap-2">
            <div className=" w-1/5 h-screen bg-[#0c10241e] px-2 py-5 box-border fixed">
                <div className="flex flex-col space-y-2">
                    <NavLink className='bg-blue-950 flex items-center hover:text-red-600 px-5 py-4 text-lg font-semibold text-white' to='/dashboard'> <span><MdDashboard className="mr-3 text-xl"/></span><span className="truncate">Admin</span></NavLink>
                    <NavLink className='bg-blue-950 flex items-center hover:text-red-600 px-5 py-4 text-lg font-semibold text-white' to='/dashboard/allSupply'> <span><RiDatabaseFill className="mr-3 text-xl"/> </span><span className="truncate">All Supply</span></NavLink>
                    <NavLink className='bg-blue-950 flex items-center hover:text-red-600 px-5 py-4 text-lg font-semibold text-white' to='/dashboard/creatSupply'> <span><MdPostAdd   className="mr-3 text-xl"/></span><span className="truncate">Add Supply</span></NavLink>
                    <NavLink className='bg-blue-950 flex items-center hover:text-red-600 px-5 py-4 text-lg font-semibold text-white' to='/dashboard'> <span><FaArrowAltCircleLeft   className="mr-3 text-xl"/></span><span className="truncate">Home</span></NavLink>
                   
                </div>
            </div>
            <div className="w-4/5 box-border ml-auto pt-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;