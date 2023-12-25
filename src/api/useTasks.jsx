import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAuth";
import useAxiosPublic from "../Hook/useAxiosPublic";

const useTasks = () => {

    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();

    const {data = [],isLoading,refetch} = useQuery({
        queryKey: ['to-do',user],
        queryFn:()=> axiosPublic.get(`/tasks/to-do?email=${user?.email}`)
    })

    const {data:ongoingTasks = [],isLoading:ongoingLoading,refetch:ongoingRefetch} = useQuery({
        queryKey: ['ongoing-tasks',user],
        queryFn:()=> axiosPublic.get(`/tasks/ongoing?email=${user?.email}`)
    })

    const {data:completeTasks = [],isLoading:completeLoading,refetch:completeRefetch} = useQuery({
        queryKey: ['complete-tasks',user],
        queryFn:()=> axiosPublic.get(`/tasks/completed-tasks?email=${user?.email}`)
    })

    return {todoTasks:data?.data,isLoading,refetch,ongoingTasks:ongoingTasks?.data,ongoingLoading,ongoingRefetch,completeTasks:completeTasks?.data,completeLoading,completeRefetch}
}
export default useTasks;