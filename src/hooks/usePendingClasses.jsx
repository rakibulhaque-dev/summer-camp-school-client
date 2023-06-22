import { useState, useEffect } from 'react';
import useAxiosSecure from './useAxiosSecure';

const usePendingClasses = () => {
  const axiosSecure = useAxiosSecure();
  const [pendingClasses, setPendingClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPendingClasses = async () => {
      try {
        const response = await axiosSecure.get('/classes');
        const classes = response.data.filter((item) => item.status === 'pending');
        setPendingClasses(classes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pending classes:', error);
        setLoading(false);
      }
    };

    fetchPendingClasses();
  }, [axiosSecure]);

  return { pendingClasses, loading };
};

export default usePendingClasses;
