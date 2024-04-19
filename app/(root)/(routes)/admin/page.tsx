
import { redirect } from "next/navigation";
import { columns } from "../courses/_components/colums"
import { DataTable } from "../courses/_components/data-table"
import BarChart from "../courses/_components/barchart";
import Card, { CardContent, CardProps } from "../courses/_components/card";
import SalesCard, { SalesProps} from "../courses/_components/sales-card";
import { auth } from "@/auth"
import { db } from "@/lib/db";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Users",
    amount: "+2350",
    discription: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    discription: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    discription: "+201 since last hour",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+$299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
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
              <Card
                key={i}
                amount={d.amount}
                discription={d.discription}
                icon={d.icon}
                label={d.label}
              />
            ))}
          </section>
          <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2 text-slate-100">
            <CardContent>
              <p className="p-4 font-semibold ">Overview</p>
              <BarChart />
            </CardContent>
            <CardContent className="flex justify-between gap-4">
              <section>
                <p>Recent Sales</p>
                <p className="text-sm text-gray-400">
                  You made 265 sales this month.
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
            </CardContent>
          </section>
        </div>
        <DataTable columns={columns} data={courses} />
      </div>
      )}
    </div>
  )
}

export default DataPage
