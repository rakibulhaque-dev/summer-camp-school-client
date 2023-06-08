import { useQuery } from "react-query";
import useAuth from "./useAuth";

const useCartItems = () => {
    const { user } = useAuth();

    const {data: cartItems = [], isLoading, } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = fetch(`http://localhost:5000/cartItems?email=${user?.email}`)
            return res.json();
        }
    })

    return [cartItems, isLoading]
};

export default useCartItems;