import { v4 as uuidv4 } from "uuid";
import Session from "../models/Session.js";

// Create a new session
export const startSession = async (req, res) => {
  try {
    const uniqueId = uuidv4();
    const userUrl = `http://localhost:5173/session/${uniqueId}`;

    const session = await Session.create({
      type: "admin",
      unique_id: uniqueId,
      userurl: userUrl,
    });

    res.status(201).json({
      success: true,
      data: session,
    });
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).json({
      success: false,
      message: "Error creating session",
      error: error.message,
    });
  }
};

// Get session by unique_id
export const getSession = async (req, res) => {
  try {
    const { unique_id } = req.params;

    const session = await Session.findOne({ unique_id });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    res.status(200).json({
      success: true,
      data: session,
    });
  } catch (error) {
    console.error("Error fetching session:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching session",
      error: error.message,
    });
  }
};
