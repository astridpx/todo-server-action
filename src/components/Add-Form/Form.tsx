"use client";

import { IoMdAdd } from "react-icons/io";
import { AddTodo } from "@/Actions/Add-Todo";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Form() {
  const [todo, setTodo] = useState("");
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      body: JSON.stringify({ todo }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  };

  return (
    <form
      action={async (formData) => {
        const res = await AddTodo(formData);

        if (res.message) toast.success(res?.message);
        if (res.error) toast.error(res?.error);
        setTodo("");
      }}
      // onSubmit={(e) => HandleSubmit(e)}
      className="flex "
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="todo"
        type="text"
        required
        placeholder="Add new item"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="border p-4 rounded-lg font-bold bg-blue-500 text-gray-100"
      >
        <IoMdAdd />
      </button>
    </form>
  );
}
