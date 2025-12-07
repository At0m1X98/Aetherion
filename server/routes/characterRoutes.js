import express from "express";
import { createCharacter, getCharacter } from "../controllers/characterController.js";
import { protect } from "../middleware/authMiddleware.js"; // Auth middleware to attach req.user

const router = express.Router();

// Create character
router.post("/", protect, createCharacter);

// Get current user's character
router.get("/", protect, getCharacter);

export default router;
