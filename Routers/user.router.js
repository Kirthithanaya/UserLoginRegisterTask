import express from 'express';
import { getUser, loginUser, registerUser } from '../Controllers/user.controllers.js';
import authMiddleware from '../Middleware/auth.middleware.js';




const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)

router.get("/getuser", authMiddleware ,getUser)

export default router;