const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const User = require('./model/user');

const app = express();
app.use(express.json());
app.use(cors());

// 連接 MongoDB
mongoose.connect('mongodb://localhost:27017/userDB');

// 顯示所有用戶資料
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// 新增用戶資料
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// 刪除用戶資料
app.delete('/users/:id', async (req, res) => {
  try {
    await User.findOneAndDelete({ id: req.params.id });
    res.json({ message: '刪除成功' });
  } catch (error) {
    res.status(500).json({ error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
