import { Link, useNavigate } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";



const Login = () => {

    const {register,handleSubmit,formState: { errors }} = useForm()
    const {logIn,googleSignIn} = useAuth();
    const navigate = useNavigate();

    const onSubmit = ({email,password}) => {
        console.log(email,password)
        logIn(email,password)
        .then(()=>{
            toast.success('Log in Successful!')
            navigate('/')
        })
        .catch(err=>{
            toast.error(err)
        })
    }
    const handleGoogle = () => {
        googleSignIn()
        .then(()=>{
            toast.success('Log in Successful!')
            navigate('/')
        })
        .catch(err=>{
            toast.error(err)
        })
    }
    

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="relative max-w-xl mx-auto">
                <div className="relative backdrop-blur-sm border border-blue-500 rounded-3xl sm:px-20 pt-6 pb-7 px-10">
                    <div className="max-w-md mx-auto">
                        <div className="text-center">
                            <Heading>Log in</Heading>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="pt-16 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                            <div className="relative pb-6">
                                <input {...register("email", { required: true })} id="email" name="email" type="text" className="peer placeholder-transparent h-10 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Enter Email" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Email Address</label>
                                {errors.email && <span className="text-xs text-red-600">Email is required</span>}
                            </div>
                            <div className="relative">
                                <input {...register("password", { required: true })} id="password" name="password" type="password" className="peer placeholder-transparent h-10 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Password</label>
                                {errors.password && <span className="text-xs text-red-600">Password is required</span>}
                            </div>
                            <div className="relative pt-6">
                                <button className="btn btn-outline bg-none hover:bg-blue-500 text-blue-500 hover:text-white border-blue-500 hover:border-none rounded-none">Log in</button>
                            </div>
                        </form>
                    </div>
                    <div className="divider py-4">or</div>
                    <div className="w-full flex justify-center">
                        <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        < FcGoogle className="h-6 w-6 mr-2" />
                        <span onClick={()=>handleGoogle()}>Continue with Google</span>
                        </button>
                    </div>
                    <p className="text-xs text-white/60 pt-4">Don't Have Account? Please <Link to='/signup' className="text-blue-500 underline underline-offset-2">Sign Up!</Link></p>
                </div>
            </div>
        </div>
    )}
export default Login;