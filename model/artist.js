import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  artistName: {
    type: String,
    maxLength: [20, "artistName cannot exceed 20 characters"],
    minLength: [4, "artistName should have more than 4 characters"],
  },
  artistImage: {
    type: Blob,
  },
  artistGenre: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Artist", artistSchema)