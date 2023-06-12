import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: users = [], isLoading: loading, refetch } = useQuery(['users'], async () => {
    if (user?.role === 'admin') {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
    return [];
  });

  return [users, loading, refetch];
};

export default useUsers;
