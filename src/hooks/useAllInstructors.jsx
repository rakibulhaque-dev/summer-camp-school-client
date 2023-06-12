import React from 'react';
import { useQuery } from '@tanstack/react-query';

const useAllInstructors = () => {
    const { data: instructors = [], isLoading: loading, error, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://language-school-server-ten.vercel.app/instructors');

                if (!res.ok) {
                    throw new Error('Failed to fetch instructors');
                }

                return res.json();
            } catch (error) {
                throw new Error('Failed to fetch instructors');
            }
        }
    });

    return [instructors, loading, error, refetch];
};

export default useAllInstructors;
