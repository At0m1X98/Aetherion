import express from "express";
import { getClasses, createClass } from "../controllers/classController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getClasses);
router.post("/", protect, createClass);

export default router;