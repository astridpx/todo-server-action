"use server";

import Todo from "@/lib/mongodb/models/todo-Schema";
import { connectDB } from "@/lib/mongodb/config/connectDB";
import { revalidatePath } from "next/cache";

export const EditTodo = async (formData: FormData, id: any) => {
  try {
    await connectDB();
    const editTodo = formData.get("newTodo");

    await Todo.findByIdAndUpdate({ _id: id }, { todo: editTodo });

    revalidatePath("/");

    return { message: "Todo successfully updated" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
