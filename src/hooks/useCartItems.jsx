import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCartItems = () => {
    const { user, loading } = useAuth();
    const token = localStorage.getItem('access-token');

    const { data: cartItems = [], isLoading, refetch } = useQuery({
        queryKey: ['cartItems', user?.email],
        enabled: !loading,
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/cartitems?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${token}`
                    }
                });
                return res.json();
            } catch (error) {
                // Handle error appropriately, e.g., show an error message or log the error
                console.error('Error fetching cart items:', error);
                throw new Error('Failed to fetch cart items');
            }
        }
    });

    return [cartItems, isLoading, refetch];
};

export default useCartItems;
