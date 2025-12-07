import express from "express";
import { getRaces, createRace } from "../controllers/raceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRaces);
router.post("/", protect, createRace);

export default router;