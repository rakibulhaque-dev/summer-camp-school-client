import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect } from "react";

const useInstructor = () => {
  const { user, loading } = useAuth();
  
  const axiosSecure = useAxiosSecure();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      console.log('useInstructor: ',res.data.instructor)
      return res.data.instructor;
    },
  });

  useEffect(() => {
    // Your other logic inside the useEffect hook if needed
  }, []);

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
