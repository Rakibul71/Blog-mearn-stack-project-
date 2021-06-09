const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: string,
      required: true,
      unique: true,
    },
    desc: {
      type: string,
      required: true,
    },
    photo: {
      type: string,
      required: false,
    },
    username: {
      type: string,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", PostSchema);
