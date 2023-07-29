"use server";

import Todo from "@/lib/mongodb/models/todo-Schema";
import { connectDB } from "@/lib/mongodb/config/connectDB";
import { revalidatePath } from "next/cache";

export const handleDelete = async (id: any) => {
  try {
    await connectDB();

    await Todo.findByIdAndDelete({ _id: id });

    revalidatePath("/");
    return { message: "Successfully deleted." };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong." };
  }
};
