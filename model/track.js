import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
  },
  trackName: {
    type: String,
    maxLength: [20, "trackName cannot exceed 20 characters"],
    minLength: [4, "trackName should have more than 4 characters"],
  },
  trackDescription: {
    type: String,
    maxLength: [500, "trackDescription cannot exceed 500 characters"],
    minLength: [10, "trackDescription should have more than 10 characters"],
  },
  trackImage: {
    type: Blob,
  },
  trackGenre: {
    type: String,
  },
  trackReleaseDate: {
    type: Date,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  trackArtist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],
  trackDuration: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Track", trackSchema);
