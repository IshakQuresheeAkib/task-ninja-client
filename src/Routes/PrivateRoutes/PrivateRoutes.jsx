import { Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnim from '../../assets/Loader.json'
import useAuth from "../../Hook/useAuth";


const PrivateRoutes = ({children}) => {
    
    const {user,loading} = useAuth();
    
    
    if (loading) {
        return <div className="h-screen w-screen flex justify-center items-center">
        <Lottie animationData={loadingAnim} className="w-96"></Lottie>
    </div>        
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoutes;