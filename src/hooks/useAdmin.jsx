import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            if (user?.role === 'admin') {
                const res = await axiosSecure.get(`/admins`);
                return res.data;
            }
            return false;
        }
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
