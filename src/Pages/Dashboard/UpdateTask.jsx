import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from '../../Hook/useAuth'
import { toast } from "react-toastify";
import { AiFillEdit } from "react-icons/ai";
import useTasks from "../../api/useTasks";


const UpdateTask = ({task,refetch}) => {

    const {title,deadline,priority,description} = task || {}
    const {user} = useAuth();
    const {register,handleSubmit,formState: { errors }} = useForm()
    const axiosPublic = useAxiosPublic();

    const handleEdit = () => {
        refetch();
        document.getElementById('my_modal_2').showModal()
    }
    
    const onSubmit = data => {
        console.log(data);

        // axiosPublic.put('/tasks/to-do',{...task,email:user?.email})
        // .then(data=>{
        //     if (data?.data.insertedId) {
        //         toast.success('Task Added Successfully!')
        //     }
        //     refetch()
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        
        // document.getElementById('my_modal_1').close() 
    }
    // { required: true }


    return (
        <div>
            <AiFillEdit onClick={()=>handleEdit()} className="text-red-600 cursor-pointer" />                      
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <div className="modal-action justify-normal w-full">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)} className="w-full leading-6 space-y-4 sm:text-lg sm:leading-7">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_2').close()}>✕</button>
                        <h3 className="text-white text-center text-4xl">Edit Task</h3>
                        <div className="relative pb-6">
                            <input {...register("title")} defaultValue={title} id="title" name="title" type="text" className="peer placeholder-transparent h-10 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Title" />
                            <label htmlFor="title" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Title</label>
                        </div>
                        <div className="relative pb-3">
                            <input {...register("deadline", )} defaultValue={deadline} id="deadline" name="deadline" type="date" className="peer placeholder-transparent h-10 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Deadline" />
                            <label htmlFor="deadline" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Deadline</label>
                        </div>
                            <p className="text-gray-500 text-base">Priority</p>
                        <div className="pb-6 flex gap-6">
                            <div className="flex items-center text-sm">
                                <input type="radio" value='low' {...register("priority", )} className="radio radio-info radio-xs checkbox-xs mr-2" />
                                <p>Low</p>
                            </div>
                            <div className="flex items-center text-sm">
                                <input type="radio" value='moderate' {...register("priority", )} className="radio radio-info radio-xs checkbox-xs mr-2" />
                                <p>Moderate</p>
                            </div>
                            <div className="flex items-center text-sm">
                                <input type="radio" value='high' {...register("priority", )} className="radio radio-info radio-xs checkbox-xs mr-2" />
                                <p>High</p>
                            </div>
                        </div>
                        <div className="relative">
                            <textarea cols='5' {...register("description", )} defaultValue={description} id="description" name="description" type="text" className="peer placeholder-transparent h-10 pt-2 bg-transparent w-full border-b-2 border-blue-500 text-white/80 focus:outline-none focus:borer-rose-600" placeholder="Enter description" />
                            <label htmlFor="description" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-white/80  peer-focus:text-sm">Description</label>
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
export default UpdateTask;
