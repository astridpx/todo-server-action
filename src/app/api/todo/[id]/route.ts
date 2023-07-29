import Todo from "@/lib/mongodb/models/todo-Schema";
import { connectDB } from "@/lib/mongodb/config/connectDB";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
  const { todo } = await req.json();
  const { id } = params;

  try {
    await connectDB();

    await Todo.findByIdAndUpdate(id, { todo });

    return NextResponse.json({ message: "Todo successfully updated." });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function DELETE({ params }: any) {
  const { id } = params;

  try {
    await connectDB();

    await Todo.findByIdAndDelete(id);

    return NextResponse.json({ message: "Todo successfully deleted." });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
