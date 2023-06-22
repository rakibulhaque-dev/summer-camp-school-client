import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useClasses = () => {
    const axiosSecure = useAxiosSecure();
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey:['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/classes');
            console.log('response from useClasses: ', res.data)
            return res.data;
        }
    });

    return [classes, loading, refetch];
};

export default useClasses;
