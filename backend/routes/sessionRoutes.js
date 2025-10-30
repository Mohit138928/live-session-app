import express from "express";
import { startSession, getSession } from "../controllers/sessionController.js";

const router = express.Router();

// POST /api/start-session
router.post("/start-session", startSession);

// GET /api/session/:unique_id
router.get("/session/:unique_id", getSession);

export default router;
