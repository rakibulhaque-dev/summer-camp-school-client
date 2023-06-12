import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['isInstructor', user?.email],
    queryFn: async () => {
      if (user?.role === 'instructor') {
        const res = await axiosSecure.get(`/instructors`);
        return res.data;
      }
      return false;
    }
  });

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
