
import { redirect } from "next/navigation";
import { columns } from "../courses/_components/colums"
import { DataTable } from "../courses/_components/data-table"
import BarChart from "../courses/_components/barchart";
import DashboardCard, { DashboardCardContent, DashboardCardProps } from "../courses/_components/dashboard-card";
import SalesCard, { SalesProps} from "../courses/_components/sales-card";
import { auth } from "@/auth"
import { db } from "@/lib/db";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const cardData: DashboardCardProps[] = [
  {
    label: "Total Revenue",
    amount: "$1,999.89",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Users",
    amount: "+511",
    discription: "+80.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+15",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Live Users",
    amount: "+28",
    discription: "+2 since last hour",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Tyler Durden",
    email: "tyler.durden@gmail.com",
    saleAmount: "+$85.00"
  },
  {
    name: "John Wayne",
    email: "john.wayne@email.com",
    saleAmount: "+$22.00"
  },
  {
    name: "Moe Lester",
    email: "moe.lester@email.com",
    saleAmount: "+$39.00"
  },
  {
    name: "Thanos",
    email: "thanos@email.com",
    saleAmount: "+$50.00"
  },
  {
    name: "Black Hawk",
    email: "black.hawk@email.com",
    saleAmount: "+$39.00"
  }
];

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
    <div className="flex flex-col gap-5 w-full pt-40">
      <h1 className="font-bold text-7xl mx-6 text-center"> Dashboard</h1>
      <div className="flex items-center justify-center">
          <Separator className=" bg-slate-100/20 h-0.5 w-40" />
      </div>
      { session?.user.email === "nizabizaher@gmail.com" && (
      <div className="container mx-auto py-10"> 
        <div className="flex flex-col gap-5  w-full">
          <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            {cardData.map((d, i) => (
              <DashboardCard
                key={i}
                amount={d.amount}
                discription={d.discription}
                icon={d.icon}
                label={d.label}
              />
            ))}
          </section>
          <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2 text-slate-100">
            <DashboardCardContent>
              <p className="p-4 font-semibold ">Overview</p>
              <BarChart />
            </DashboardCardContent>
            <DashboardCardContent className="flex justify-between gap-4">
              <section>
                <p>Recent Sales</p>
                <p className="text-sm text-gray-400">
                  You made 22 sales this month.
                </p>
              </section>
              {uesrSalesData.map((d, i) => (
                <SalesCard
                  key={i}
                  email={d.email}
                  name={d.name}
                  saleAmount={d.saleAmount}
                />
              ))}
            </DashboardCardContent>
          </section>
        </div>
        <DataTable columns={columns} data={courses} />
      </div>
      )}
    </div>
  )
}

export default DataPage
