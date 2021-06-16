const mongoose = require("mongoose");
const Task = mongoose.model("Tasks", {
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
    default: "PENDING",
  },
  body: String,
});
module.exports = Task;
