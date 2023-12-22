import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAuth from "../../../Hook/useAuth";

const ToDo = () => {

    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const {data = []} = useQuery({
        queryKey: ['to-do'],
        queryFn:()=> axiosPublic.get(`/to-do?email=${user?.email}`)
     })

     console.log(data?.data);
    
    const tasks = data?.data

    return (
        <div className="bg-black/40 rounded-t-md text-white/90 border-t-8 h-96 border-red-600 lg:w-96 w-80">
            <h5 className="text-center text-2xl border-b w-fit mx-auto">To-Do</h5>
            <div>
                { tasks ? 
                <ul className="">
                    {
                        tasks.map(task=>{
                            <p className="text-white text-xl w-96 bg-white h-96 text-left">{task.title}</p>
                        })
                    }
                </ul> :
                <p className="flex justify-center items-center h-[40vh] text-red-600">No tasks have been added yet!</p>
                }
            </div>
        </div>
    )}
export default ToDo;