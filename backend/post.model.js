const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },

  likes: [
    {
      type: Schema.Types.ObjectId,

      ref: "User",
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,

      ref: "User",
    },
  ],
});
const ProfileModel = mongoose.model("Post", Post, "post");
module.exports = ProfileModel;
