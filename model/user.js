import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    maxLength: [20, "userName cannot exceed 20 characters"],
    minLength: [4, "userName should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    // select: false,  // if we dont want is filed to be return by api
  },
  Profile_Image: {
    type: Blob,
  },
  userType:{
    type: String,
    enum: ["user", "artist", "admin"],
    default: "user",
  },
  //TODO : Add more fields with its id
  // like:{
  // },
  // playlist: {
  //   type: Array,
  // },
  // following: {
  //   type: Array,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.model("User", userSchema);
