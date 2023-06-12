import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCartItems = () => {
    const { user, loading } = useAuth();
    const token = localStorage.getItem('access-token');

    const { data: cartItems = [], isLoading, refetch } = useQuery({
        queryKey: ['cartItems', user?.email],
        enabled: !loading && user?.role === 'student', // Only enable the query if the user's role is 'student'
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cartitems/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    return [cartItems, isLoading, refetch];
};

export default useCartItems;
