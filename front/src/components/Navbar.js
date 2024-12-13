import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container">
        {/* 修改標題為適合你需求的名稱，或者移除標題 */}
        <Link className="navbar-brand" to="/">用戶管理系統</Link>
        
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/add">新增用戶</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">刪除用戶</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">查看用戶列表</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
