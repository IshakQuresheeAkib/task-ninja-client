import { Link, useNavigate } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

    const {register,handleSubmit,formState: { errors }} = useForm()
    const {createUser,upgradeProfile} = useAuth();
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        console.log(data?.email,data?.password);
        createUser(data?.email,data?.password)
        .then(()=>{
            console.log('hello');
            upgradeProfile(data?.name,data?.imageUrl)
            .then(()=>{
                toast.success('Account created successfully!')
                navigate('/')
            })
            .catch(()=>{
                return toast.error('User email already exist!')
            })
        })
        .catch(()=>{
            return toast.error('User email already exist!')
        })
    }

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="relative max-w-xl mx-auto">
                <div className="relative backdrop-blur-sm border border-blue-500 rounded-3xl sm:px-20 2xl:pt-6 pt-2 2xl:pb-7 pb-1 px-10">
                    <div className="max-w-md mx-auto">
                        <div className="text-center">
                            <Heading>Sign Up</Heading>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
                            <div className="relative pb-6">
                                <input {...register("name", { required: true })} id="name" name="name" type="text" className="peer placeholder-transparent h-10 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Full Name" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Full Name</label>
                                {errors.email && <span className="text-xs text-red-600">Name is required</span>}
                            </div>
                            <div className="relative pb-6">
                                <input {...register("imageUrl", { required: true })} id="imageUrl" name="imageUrl" type="text" className="peer placeholder-transparent h-10 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Profile Image" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Profile Image</label>
                                {errors.email && <span className="text-xs text-red-600">Image is required</span>}
                            </div>
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
                            <div className="relative 2xl:pt-6">
                                <button className="btn btn-outline bg-none hover:bg-blue-500 text-blue-500 hover:text-white border-blue-500 hover:border-none rounded-none">Sign up</button>
                            </div>
                        </form>
                    </div>
                    <p className="text-xs text-white/60 2xl:pt-7 py-3">Already Have an Account? Please <Link to='/login' className="text-blue-500 underline underline-offset-2">Log in!</Link></p>
                </div>
            </div>
        </div>
    )}
export default SignUp;