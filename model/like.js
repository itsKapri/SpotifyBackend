import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    track: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Track",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    like_Date_Time:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Like", likeSchema)