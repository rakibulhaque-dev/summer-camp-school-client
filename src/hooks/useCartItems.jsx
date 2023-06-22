import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCartItems = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure()


    const { data: cartItems = [], isLoading, refetch } = useQuery({
        queryKey: ['cartItems', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/cartitems/${user?.email}`, {

            });
            console.log('Cart Total: ', res.data)
            return res.data;
        }
    });
    return [cartItems, isLoading, refetch];

};

export default useCartItems;
