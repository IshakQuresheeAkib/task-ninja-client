import { Navigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Loader from "../../Components/Loader/Loader";


const PrivateRoutes = ({children}) => {
    
    const {user,loading} = useAuth();
    
    if (loading) {
        return <Loader></Loader>      
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoutes;