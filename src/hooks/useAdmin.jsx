import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect } from "react";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log('Admin:', res.data.admin);
      return res.data.admin;
    },
  });

  useEffect(() => {
    // Your other logic inside the useEffect hook if needed
  }, []);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
