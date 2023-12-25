import Lottie from "lottie-react";
import previousTask from '../../assets/previousTask.json'
import useTasks from "../../api/useTasks";


const PreviousTasks = () => {
        
    const {completeTasks,completeLoading} = useTasks()
    console.log(completeTasks);
    

    return (
        <div>
            <div onClick={()=>document.getElementById('my_modal_3').showModal()} className="flex items-center cursor-pointer border border-blue-500 h-fit rounded-3xl px-3">
                <p className="text-white">Previous Task</p>
                <Lottie animationData={previousTask} className='w-10'></Lottie>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <div className="modal-action justify-normal w-full">
                    <form method="dialog" className="w-full leading-6 space-y-4 sm:text-lg sm:leading-7">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById('my_modal_1').close()}>✕</button>
                        <h3 className="text-white text-center text-4xl">Previous Tasks</h3>
                        <div className="flex flex-col">
                        { completeLoading ? <span className="loading loading-spinner"></span>: completeTasks ?
                        <ul className="w-full px-2">
                            {
                                completeTasks?.map(task=><li key={task._id} className=" shadow-md mt-5 list-inside list-decimal">{task.title}</li>)
                            }
                        </ul> : 
                        <p className="flex justify-center items-center h-[40vh] text-red-600">No tasks have been added yet!</p>
                        }
                        </div>
                    </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
export default PreviousTasks;