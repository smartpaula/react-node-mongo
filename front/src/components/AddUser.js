import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    company: '',
    username: '',
    email: '',
    address: '',
    zip: '',
    state: '',
    country: '',
    phone: '',
    photo: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', userData);
      alert('新增成功！');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '600px' }}>
        <h2 className="text-center mb-4">新增用戶</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="number" name="id" className="form-control" placeholder="ID" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="text" name="name" className="form-control" placeholder="姓名" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="text" name="company" className="form-control" placeholder="公司" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="text" name="username" className="form-control" placeholder="使用者名稱" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="email" name="email" className="form-control" placeholder="電子郵件" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="text" name="address" className="form-control" placeholder="地址" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="text" name="zip" className="form-control" placeholder="郵遞區號" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="text" name="state" className="form-control" placeholder="州/省" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="text" name="country" className="form-control" placeholder="國家" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="text" name="phone" className="form-control" placeholder="電話" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="text" name="photo" className="form-control" placeholder="照片 URL" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">新增</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
