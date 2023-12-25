import Lottie from "lottie-react";
import addTask from '../../assets/Animation - 1703192629996.json'
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from '../../Hook/useAuth'
import { toast } from "react-toastify";

const CreateTask = ({refetch}) => {

    const {user} = useAuth();
    const {register,handleSubmit,formState: { errors }} = useForm()
    const axiosPublic = useAxiosPublic();

    const onSubmit = task => {
        console.log(task);

        axiosPublic.post('/tasks/to-do',{...task,email:user?.email})
        .then(data=>{
            if (data?.data.insertedId) {
                toast.success('Task Added Successfully!')
            }
            refetch()
        })
        .catch(err=>{
            console.log(err);
        })
        
        document.getElementById('my_modal_1').close() 
    }

    return (
        <div>
            <div className="flex items-center cursor-pointer border border-blue-500 h-fit rounded-3xl px-3"  onClick={()=>document.getElementById('my_modal_1').showModal()}>
                <p className="text-white" >Create Tasks</p>
                <Lottie animationData={addTask} className='w-10'></Lottie>                       
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="modal-action justify-normal w-full">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="w-full leading-6 space-y-4 sm:text-lg sm:leading-7">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_1').close()}>✕</button>
                        <h3 className="text-white text-center text-4xl">Create Tasks</h3>
                        <div className="relative pb-6">
                            <input {...register("title", { required: true })} id="title" name="title" type="text" className="peer placeholder-transparent h-10 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Title" />
                            <label htmlFor="title" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Title</label>
                            {errors.title && <span className="text-xs text-red-600">Title is required</span>}
                        </div>
                        <div className="relative pb-3">
                            <input {...register("deadline", { required: true })} id="deadline" name="deadline" type="date" className="peer placeholder-transparent h-10 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Deadline" />
                            <label htmlFor="deadline" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Deadline</label>
                        </div>
                            {errors.deadline && <span className="text-xs text-red-600">Deadline is required</span>}
                            <p className="text-gray-500 text-base">Priority</p>
                        <div className="pb-6 flex gap-6">
                            <div className="flex items-center text-sm">
                                <input type="radio" value='low' {...register("priority", { required: true })} className="radio radio-info radio-xs checkbox-xs mr-2" />
                                <p>Low</p>
                            </div>
                            <div className="flex items-center text-sm">
                                <input type="radio" value='moderate' {...register("priority", { required: true })} className="radio radio-info radio-xs checkbox-xs mr-2" />
                                <p>Moderate</p>
                            </div>
                            <div className="flex items-center text-sm">
                                <input type="radio" value='high' {...register("priority", { required: true })} className="radio radio-info radio-xs checkbox-xs mr-2" />
                                <p>High</p>
                            </div>
                        </div>
                            {errors.priority && <span className="text-xs text-red-600">Priority is required</span>}
                        <div className="relative">
                            <textarea cols='5' {...register("description", { required: true })} id="description" name="description" type="text" className="peer placeholder-transparent h-10 pt-2 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Enter description" />
                            <label htmlFor="description" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Description</label>
                            {errors.description && <span className="text-xs text-red-600">Description is required</span>}
                        </div>
                        <div className="relative 2xl:py-6">
                            <button className="btn btn-outline bg-none hover:bg-blue-500 text-blue-500 hover:text-white border-blue-500 hover:border-none rounded-none">Create</button>
                        </div>
                    </form>
                    </div>
                </div>
            </dialog>
        </div>
    )}
export default CreateTask;
