"use server";

import Todo from "@/lib/mongodb/models/todo-Schema";
import { connectDB } from "@/lib/mongodb/config/connectDB";
import { revalidatePath } from "next/cache";

// ? * There are two option for server action post request
// ? * Options 1 is using API
// ? * Option 2 is direct query like a php

export async function AddTodo(formData: FormData) {
  const todo = formData.get("todo");

  // ? @desc Optioan 1 with API
  // const res = await fetch("http://localhost:3000/api/todo", {
  //   method: "POST",
  //   body: JSON.stringify({ todo }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // const status = await res?.json();

  // revalidatePath("/");
  // return status;

  // ******************************************************************* //

  // ? @desc Option 2 with direct query like a php
  try {
    await connectDB();

    await Todo.create({ todo });

    revalidatePath("/");

    return { message: "SuccessFully added." };
  } catch (error) {
    console.log(error);
    return { error: "Somethign went wrong." };
  }
}
