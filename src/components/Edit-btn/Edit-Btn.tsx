"use client";

import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EditTodo } from "@/Actions/Edit-Todo";
import toast from "react-hot-toast";

export default function EditBtn({ todoId, todoData }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog open={isOpen}>
        <DialogTrigger onClick={() => setIsOpen(!isOpen)} asChild>
          <button className="bg-blue-500 text-gray-100 h-full  p-3 ">
            <AiFillEdit size={24} />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogDescription>
              Make changes to your Todo Items here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <form
            action={async (formData) => {
              const stat = await EditTodo(formData, todoId);
              if (stat.message) toast.success(stat?.message);
              if (stat.error) toast.error(stat?.error);
              setIsOpen(false);
            }}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Title
                </Label>
                <Input
                  defaultValue={todoData}
                  name="newTodo"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
