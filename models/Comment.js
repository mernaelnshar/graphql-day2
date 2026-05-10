import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }
});

export default mongoose.model("Comment", commentSchema);