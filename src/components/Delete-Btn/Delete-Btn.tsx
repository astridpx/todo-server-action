"use client";

import { MdDelete } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import { handleDelete } from "@/Actions/Delete-Todo";

export default function DeleteBtn({ todoId }: any) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="bg-red-500 text-gray-100 h-full  p-3 ">
            <MdDelete size={24} />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* <AlertDialogAction>Continue</AlertDialogAction> */}
            <AlertDialogAction
              onClick={async () => {
                const stat = await handleDelete(todoId);
                if (stat.message) toast.success(stat?.message);
                if (stat.error) toast.error(stat?.error);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
