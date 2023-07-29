import Todo from "@/lib/mongodb/models/todo-Schema";
import { connectDB } from "@/lib/mongodb/config/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const Todos = await Todo.find();

    return NextResponse.json(Todos);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const { todo } = await req.json();

  try {
    await connectDB();

    await Todo.create({ todo });
    return NextResponse.json(
      { message: "Todo successfully added." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
