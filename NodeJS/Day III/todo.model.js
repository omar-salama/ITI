const mongoose = require("mongoose");
const Todo = mongoose.model("Todo", {
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["DONE", "INPROGRESS", "PENDING"],
  },
  body: String,
});
module.exports = Todo;
