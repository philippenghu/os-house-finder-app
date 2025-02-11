import express from 'express';
import {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from '../controllers/userController.js';
import { userAuth } from '../middleware/userAuth.js';

const userRouter = express.Router();

// Register a new user
userRouter.post('/register', registerUser);

// User login
userRouter.post('/login', loginUser);

// Update user's email and password
userRouter.put('/:id', userAuth, updateUser);

// Delete a user
userRouter.delete('/:id', userAuth, deleteUser);

// Get user information
userRouter.get('/:id', userAuth, getUser);

// Get information of all registered users
userRouter.get('/', userAuth, getAllUsers);

export default userRouter;
