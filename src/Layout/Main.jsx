import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useAuth from "../Hook/useAuth";
import Loader from "../Components/Loader/Loader";


const Main = () => {

    const {loading} = useAuth();

    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className="">
            <Navbar></Navbar>            
            <Outlet></Outlet>
        </div>
    )}
export default Main;