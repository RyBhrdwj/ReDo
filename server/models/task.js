const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  deadline: {
    type: Date,
  },
  flag: {
    type: Number,
    default: 0,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  recurring: {
    type: Boolean,
    default: false,
  },
  time_spent: {
    type: Number,
    default: 0,
  },
  tags: {
    type: [String],
    default: [],
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
