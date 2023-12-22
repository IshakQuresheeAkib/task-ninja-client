import Lottie from "lottie-react";
import loadingAnim from '../../assets/Loader.json'

const Loader = () => {

    

    return (
        <div className="h-screen w-screen flex justify-center items-center">
        <Lottie animationData={loadingAnim} className="w-96"></Lottie>
    </div> 
    )}
export default Loader;