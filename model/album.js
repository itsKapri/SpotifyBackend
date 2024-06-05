import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  albumName: {
    type: String,
    maxLength: [20, "albumName cannot exceed 20 characters"],
    minLength: [4, "albumName should have more than 4 characters"],
  },
  albumDescription: {
    type: String,
    maxLength: [500, "albumDescription cannot exceed 500 characters"],
    minLength: [10, "albumDescription should have more than 10 characters"],
  },
  albumImage: {
    type: Blob,
  },
  albumGenre: {
    type: String,
  },
  albumReleaseDate: {
    type: Date,
  },
  albumArtist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Album", albumSchema);
