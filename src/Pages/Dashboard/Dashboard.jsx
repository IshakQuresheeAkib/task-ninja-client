import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Lottie from "lottie-react";
import previousTask from '../../assets/previousTask.json'
import { toast } from "react-toastify";
import CreateTask from "./CreateTask";
import ToDo from "./ToDo/ToDo";

const Dashboard = () => {

    const {user,logOut} = useAuth();
    const navigate = useNavigate();

    const handleLogOut =  () => {
        logOut()
        .then(()=>{
            toast.success('Logout successful!')
            navigate('/')
        })
    }

    return (
        <div>
             <div className="flex justify-between sm:px-20 px-2 py-2 backdrop-blur-sm">
                <div className="flex sm:gap-5 gap-2 items-center">               
                    <div className="flex items-center cursor-pointer border border-blue-500 h-fit rounded-3xl px-3">
                        <p className="text-white">Previous Task</p>
                        <Lottie animationData={previousTask} className='w-10'></Lottie>  
                    </div>
                    
                    <CreateTask></CreateTask>
                </div>
                <div className="dropdown dropdown-hover dropdown-end">
                        <div tabIndex={0} role="button" className="w-10 hover:border-none">
                            <div className="w-52 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} className="sm:w-20 w-11 sm:h-20 h-11 rounded-full"/>
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-blue-300/30 text-white rounded-box w-36">
                            <li className="hover:bg-black rounded-lg"><Link to='/'>Home</Link></li>
                            <li className="hover:bg-black rounded-lg"><button onClick={()=>handleLogOut()}>Logout</button></li>
                        </ul>
                </div>
             </div>
             <div className="max-w-7xl px-2 mx-auto lg:mt-20 mt-10 flex flex-wrap justify-center gap-10">
                    <ToDo></ToDo>
                    <div className="bg-black/40 rounded-t-md text-white/90 border-t-8 h-96 border-yellow-400 lg:w-96 w-80">
                        <h5 className="text-center text-2xl border-b w-fit mx-auto">Ongoing</h5>
                    </div>
                    <div className="bg-black/40 rounded-t-md text-white/90 border-t-8 h-96 border-green-600 lg:w-96 w-80">
                        <h5 className="text-center text-2xl border-b  w-fit mx-auto">Completed</h5>
                    </div>
             </div>

        </div>
    )}
export default Dashboard;