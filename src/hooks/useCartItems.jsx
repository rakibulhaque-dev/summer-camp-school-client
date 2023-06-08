import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCartItems = () => {
    const { user, loading } = useAuth();

    const token = localStorage.getItem('access-token')

    const { data: cartItems = [], isLoading, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cartitems?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    })

    return [cartItems, isLoading, refetch];
};

export default useCartItems;