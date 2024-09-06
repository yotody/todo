import { ConnectDB } from "@/lib/config/db";
import todomodel from "@/lib/models/todomodels";
import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";
const loaddb=async()=>{
    await ConnectDB()
}
loaddb();
export async function GET(request) {
    const todos = await todomodel.find({});
    return NextResponse.json({todos:todos})
}
export async function POST(request) {
    const {title,description}= await request.json()
    await todomodel.create({
        title,
        description
    })
    return NextResponse.json({msg:"todocreated"})
}
export async function DELETE(request) {
  try {
    // Extract the search parameters from the URL
    const { searchParams } = new URL(request.url);
    const mongoId = searchParams.get('mongoId');
       // Attempt to delete the document from the database
    const deletedTodo = await todomodel.findByIdAndDelete(mongoId);
    return NextResponse.json({ msg: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
}
export async function PUT(request) {
    try {
      // Extract the search parameters from the URL
      const { searchParams } = new URL(request.url);
      const mongoId = searchParams.get('mongoId');
         // Attempt to delete the document from the database
     await todomodel.findByIdAndUpdate(mongoId, { 
        $set:{isCompleted:true}
         });
      return NextResponse.json({ msg: "Todo completed successfully" });
    } catch (error) {
      console.error("Error deleting todo:", error);
      return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
    }
  }


