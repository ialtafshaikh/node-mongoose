const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    description: {
      type: String,
      required: [true, "please enter task details"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

var Todos = mongoose.model("Todo", todoSchema);

module.exports = Todos;
