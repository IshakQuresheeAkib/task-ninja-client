import { Link } from "react-router-dom";
import Heading from "../../../Components/Heading/Heading";
import PrimaryBtn from "../../../Components/PrimaryBtn/PrimaryBtn";

const Banner = () => {
    return (
        <div  className="flex items-center lg:mt-20">
            <div  className="flex lg:flex-row flex-col-reverse gap-10 lg:gap-0 text-center lg:text-left lg:text-none 2xl:px-20 px-5 mx-auto items-center">
                <div className="leading-10 tracking-wider lg:flex-[1.5] flex-1">
                    <div className="mb-10"><Heading>Simplify, Organize, Achieve: Your Tasks, Your Way.</Heading></div>
                    <Link className="" to='/login'><PrimaryBtn>Let's Explore</PrimaryBtn></Link>    
                </div>
                <div className="lg:flex-[1] flex-1">
                    <img src="https://i.ibb.co/kqtVvF2/White-Blue-Illustration-Tips-Man.png" alt="" className="w-96 lg:w-full"/>
                </div>
            </div>
        </div>
    )}
export default Banner;