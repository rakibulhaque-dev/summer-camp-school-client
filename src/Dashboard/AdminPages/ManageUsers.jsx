import React from 'react';
import useUsers from '../../hooks/useUsers';

const ManageUsers = () => {
    const { users } = useUsers();
    return (
        <div>
            Manage Users
        </div>
    );
};

export default ManageUsers;