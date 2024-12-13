import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      alert('刪除成功！');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>刪除用戶</h2>
      <input type="number" placeholder="用戶 ID" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>刪除</button>
    </div>
  );
};

export default DeleteUser;
