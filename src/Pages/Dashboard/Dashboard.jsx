import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { toast } from "react-toastify";
import CreateTask from "./CreateTask";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useDrag } from "react-dnd";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDrop } from "react-dnd";
import PreviousTasks from "./PreviousTasks";
import useTasks from "../../api/useTasks";

const Dashboard = () => {

    const {user,logOut} = useAuth();
    const navigate = useNavigate();
    const {todoTasks,isLoading,refetch,ongoingTasks,ongoingLoading,ongoingRefetch,completeTasks,completeLoading,completeRefetch} = useTasks()
    
    
    const handleLogOut =  () => {
        logOut()
        .then(()=>{
            toast.success('Logout successful!')
            navigate('/')
        })
    }

    return (
        <div>
            <div className="flex justify-between sm:px-20 px-2 py-2 backdrop-blur-sm">
            <div className="flex sm:gap-5 gap-2 items-center">
                <PreviousTasks></PreviousTasks>
                <CreateTask refetch={refetch}></CreateTask>
            </div>
            <div className="dropdown dropdown-hover dropdown-end">
                    <div tabIndex={0} role="button" className="w-10 hover:border-none">
                        <div className="w-52 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} className="sm:w-20 w-11 sm:h-20 h-11 rounded-full"/>
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-blue-300/30 text-white rounded-box w-36">
                        <li className="hover:bg-black rounded-lg"><Link to='/'>Home</Link></li>
                        <li className="hover:bg-black rounded-lg"><button onClick={()=>handleLogOut()}>Logout</button></li>
                    </ul>
            </div>
            </div>
            <div className="max-w-7xl px-2 mx-auto lg:mt-20 mt-10 flex flex-wrap justify-center gap-10">
                <ToDo todoTasks={todoTasks} isLoading={isLoading} refetch={refetch} ongoingRefetch={ongoingRefetch}></ToDo>
                <Ongoing ongoingTasks={ongoingTasks} ongoingLoading={ongoingLoading}  completeRefetch={completeRefetch} ongoingRefetch={ongoingRefetch}></Ongoing>
                <Completed completeTasks={completeTasks} completeLoading={completeLoading} ></Completed>
            </div>
        </div>
    )}

export default Dashboard;


const ToDo = ({todoTasks,isLoading,refetch,ongoingRefetch}) => {

    const axiosPublic = useAxiosPublic();
    
    const handleDelete = (id) =>{
        console.log(id);
        Swal.fire({
            title: "Do You Want to Delete this task?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tasks/to-do/${id}`)
                .then(data=>{
                    if (data?.data.deletedCount) {
                        toast.success('Task Deleted successfully!')
                        refetch()
                    }
                })
            }
          });       
        }

        

    return (
        <div className="bg-black/40 rounded-t-md text-white/90 border-t-8 min-h-96 mb-20 border-red-600 lg:w-96 w-80">
            <h5 className="text-center text-3xl border-b w-fit mx-auto mb-5">To-Do</h5>
            <div>
                { isLoading ? <span className="loading loading-spinner"></span>: todoTasks?.length ?
                <div className="px-2">
                    {
                        todoTasks?.map(task=><ToDoTask  ongoingRefetch={ongoingRefetch} refetch={refetch} key={task._id} task={task} handleDelete={handleDelete}></ToDoTask>)
                    }
                </div> : 
                <p className="flex justify-center items-center h-[40vh] text-red-600">No tasks have been added yet!</p>
                }
            </div>
        </div>
)}


const Ongoing = ({ongoingTasks,ongoingLoading,ongoingRefetch,completeRefetch}) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
    }))

    return (
        <div ref={drop}  className={` rounded-t-md text-white/90 border-t-8 h-96 border-yellow-500 lg:w-96 w-80 ${isOver ? 'bg-white/10' : 'bg-black/40'}`}>
            <h5 className="text-center text-3xl border-b w-fit mx-auto mb-5">Ongoing</h5>
            <div>
                { ongoingLoading ? <span className="loading loading-spinner"></span>: ongoingTasks?.length ?
                <div className="px-2">
                    {
                        ongoingTasks?.map(task=><OngoingTasks key={task._id} ongoingRefetch={ongoingRefetch} completeRefetch={completeRefetch}  task={task}></OngoingTasks>)
                    }
                </div> :
                <p className="flex justify-center items-center h-[40vh] text-red-600">No tasks is running now!</p>
                }
            </div>
        </div>
)}

const Completed = ({completeTasks,completeLoading}) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
    }))

    return (
        <div ref={drop} className={` rounded-t-md text-white/90 border-t-8 h-96 border-green-500 lg:w-96 w-80 ${isOver ? 'bg-white/10' : 'bg-black/40'}`}>
            <h5 className="text-center text-3xl border-b w-fit mx-auto mb-5">Completed</h5>
            <div>
                { completeLoading ? <span className="loading loading-spinner"></span>: completeTasks?.length ?
                <div className="px-2">
                    {
                        completeTasks?.map(task=><CompletedTask key={task._id} task={task}></CompletedTask>)
                    }
                </div> :
                <p className="flex justify-center items-center h-[40vh] text-red-600">No tasks is running now!</p>
                }
            </div>
        </div>
)}


const ToDoTask = ({task,handleDelete,refetch,ongoingRefetch}) => {

    const axiosPublic = useAxiosPublic()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: {id: task._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
    }))

    const handleOngoing = (id) =>{
        console.log(id);
        const data = {id,type:'ongoing'}
        axiosPublic.patch('/tasks/to-do',data)
        .then(data=>{
            console.log(data?.data);
            toast.success('Task Added to Ongoing List!')
            refetch()
            ongoingRefetch()
        })
    }
    
    return (
        <div ref={drag} className={`text-white text-xl text-left flex justify-between items-center mt-3 border rounded-lg p-2 border-white/20 cursor-grab
            ${isDragging ? ' opacity-50' : 'opacity-100'}`}>
            <p className="text-base">{task.title}</p>
            <div className="flex items-center gap-5">
                <p onClick={()=>handleOngoing(task._id)} className="text-xs text-red-600 underline cursor-pointer underline-offset-2"> Ongoing</p>
                <RiDeleteBin2Fill className="text-red-600 cursor-pointer" onClick={()=>handleDelete(task._id)}/>
            </div>
        </div>
)}


const OngoingTasks = ({task,ongoingRefetch,completeRefetch}) => {
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: {id: task._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
    }))
    const axiosPublic = useAxiosPublic();
    const handleCompleted = (id) =>{
        console.log(id);
        const data = {id,type:'completed'}
        axiosPublic.patch('/tasks/to-do',data)
        .then(data=>{
            toast.success('Task Completed Successfully!')
            console.log(data?.data);
            ongoingRefetch()
            completeRefetch()
        })
    }

    return (
        <div ref={drag} className={`text-white text-xl text-left flex justify-between items-center mt-3 border rounded-lg p-2 border-white/20 cursor-grab
            ${isDragging ? 'opacity-50' : 'opacity-100'}`}>
            <p className="text-base">{task.title}</p>
            <div className="flex items-center gap-5">
            <p onClick={()=>handleCompleted(task._id)} className="text-xs text-red-600 underline cursor-pointer underline-offset-2"> Completed</p>
            </div>
        </div>
)}




const CompletedTask = ({task}) => {
    
    return (
        <div className={`text-white text-xl text-left flex justify-between items-center mt-3 border rounded-lg p-2 border-white/20`}>
            <p className="text-base">{task.title}</p>
            <div className="flex items-center gap-5">          
            </div>
        </div>
)}