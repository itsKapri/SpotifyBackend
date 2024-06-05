import mongoose from "mongoose";

const playListSchema = new mongoose.Schema({
  playListName: {
    type: String,
    maxLength: [20, "playListName cannot exceed 20 characters"],
    minLength: [4, "playListName should have more than 4 characters"],
  },
  track: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Track",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("PlayList", playListSchema);
