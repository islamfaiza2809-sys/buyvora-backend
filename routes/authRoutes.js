import express from "express";
import User from "../models/user.js";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// REGISTER & LOGIN
router.post("/register", registerUser);
router.post("/login", loginUser);

// GET all users (Admin only)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // exclude passwords
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching users" });
  }
});

export default router;
