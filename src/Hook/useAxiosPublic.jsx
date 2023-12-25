import axios from "axios";

const useAxiosPublic = () => {

    const axiosPublic = axios.create({
        baseURL:'https://task-ninja-server.vercel.app'
    })

    return axiosPublic;
}
export default useAxiosPublic;