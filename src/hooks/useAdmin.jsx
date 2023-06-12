import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
            console.log('Admin: ', res)
            const data = res.json()
            return data;
        }
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
