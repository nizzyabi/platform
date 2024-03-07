
import { redirect } from "next/navigation";
import { columns } from "../courses/_components/colums"
import { DataTable } from "../courses/_components/data-table"
import { auth } from "@/auth"
import { db } from "@/lib/db";


const DataPage = async () => {
    const session = await auth();

    if (!session) {
        return redirect('/')
    }

    const courses = await db.course.findMany({
        where: {
          userId: session.user.id ?? ''
        },
        orderBy: {
            createdAt: 'desc'
        },
    });

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={courses} />
    </div>
  )
}

export default DataPage
