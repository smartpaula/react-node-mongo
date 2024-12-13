import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import UserList from './components/UserList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/delete" element={<DeleteUser />} />
      </Routes>
    </Router>
  );
}

export default App;
