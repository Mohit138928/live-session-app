import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      default: "admin",
    },
    unique_id: {
      type: String,
      required: true,
      unique: true,
    },
    userurl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;
