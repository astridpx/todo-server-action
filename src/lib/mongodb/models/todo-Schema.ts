import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    todo: String,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);

export default Todo;
