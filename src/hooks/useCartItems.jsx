import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCartItems = () => {
    const { user } = useAuth();

    const {data: cartItems = [], isLoading, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cartitems?email=${user?.email}`)
            return res.json();
        }
    })

    return [cartItems, isLoading, refetch];
};

export default useCartItems;