import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import { toast } from "react-toastify";


const Navbar = () => {

    const {logOut,user} = useAuth();
    const navigate = useNavigate();

    const handleLogOut =  () => {
        logOut()
        .then(()=>{
            toast.success('Logout successful!')
            navigate('/')
        })
    }

    return (
        <div className="navbar justify-between xl:px-20 px-4 mx-auto p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content gap-4 py-6 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Item 1</NavLink></li>                   
                        <li><NavLink to='/'>Item 1</NavLink></li>                   
                        <li><NavLink to='/'>Item 1</NavLink></li> 
                    </ul>
                </div>
                <h3 className="text-4xl">TaskNinja</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                    <li><NavLink to='/' className='text-white'>Home</NavLink></li>                   
                    <li><NavLink to='/meet-our-users' className='text-white'>Meet Our Users</NavLink></li>                   
                    <li><NavLink to='/about-us' className='text-white'>About Us</NavLink></li>
                </ul>
            </div>
            {
                user && <div className="dropdown dropdown-hover dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-blue-300/30 text-white rounded-box w-36">
                    <li className="hover:bg-black rounded-lg"><Link to='/dashboard'>Dashboard</Link></li>
                    <li className="hover:bg-black rounded-lg"><button onClick={()=>handleLogOut()}>Logout</button></li>
                </ul>
            </div>
            }
        </div>
    )}
export default Navbar;