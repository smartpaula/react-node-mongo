import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">用戶列表</h2>
      {users.length === 0 ? (
        <p>沒有用戶資料</p>
      ) : (
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <h5>{user.name}</h5>
              <p>Email: {user.email}</p>
              <p>公司: {user.company}</p>
              <img src={user.photo} alt={user.name} width="100" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
