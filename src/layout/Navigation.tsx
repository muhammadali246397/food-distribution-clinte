import { Link, NavLink } from "react-router-dom";
import Container from "../components/ui/Container";


const Navigation = () => {

    const navItems = <>
        <li><Link className='font-semibold text-white' to='/'> HOME</Link></li>
        <li><Link className='font-semibold text-white' to='/allsuplies'> ALL SUPLIES</Link></li>
        <li><Link className='font-semibold text-white' to='/login'> LOGIN</Link></li>
        <li><Link className='font-semibold text-white' to='/dashboard'> DASHBOARD</Link></li>
    
    </>
    return (
        <div className="border-b  bg-[#0A152F]">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                             {navItems}
                            </ul>
                        </div>
                        <Link to='/' className="text-white font-bold text-2xl">F<span className="text-red-600">OO</span>DFl<span className="text-red-600">O</span>W</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                           {navItems}
                        </ul>
                    </div>
                   
                </div>
            </Container>
        </div>
    );
};

export default Navigation;