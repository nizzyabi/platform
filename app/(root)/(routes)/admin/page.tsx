
import { redirect } from "next/navigation";
import { columns } from "../courses/_components/colums"
import { DataTable } from "../courses/_components/data-table"
import BarChart from "../courses/_components/barchart";
import DashboardCard, { DashboardCardContent, DashboardCardProps } from "../courses/_components/dashboard-card";
import SalesCard, { SalesProps} from "../courses/_components/sales-card";
import UserDataCard, {UserDataProps} from "../courses/_components/user-data-card";
import { auth } from "@/auth"
import { db } from "@/lib/db";
import { Radio, CreditCard, DollarSign, User, BadgeDollarSign, UserRoundCheck, CandlestickChart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const cardData: DashboardCardProps[] = [
  {
    label: "Total Revenue",
    amount: "$929",
    discription: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Users",
    amount: "+511",
    discription: "+80.1% from last month",
    icon: User
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
    icon: Radio
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

const userData: UserDataProps[] = [
  {
    name: "Tyler Durden",
    email: "tyle.durden@gmail.com",
    time: "2 hours ago"
  },
  {
    name: "Alex Jones",
    email: "alex.jones@hotmail.com",
    time: "1 hour ago"
  },
  {
    name: "Joe Rogan",
    email: "joerogan_chimp@gmail.com",
    time: "8 hours ago",
  },
  {
    name: "Steve Jobs",
    email: "stevejob@apple.com",
    time: "1 day ago",
  },
  {
    name: "Maha Isk",
    email: "mahaisk@gmail.com",
    time: "1 day ago",
  }
]

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
      <h1 className="font-bold text-7xl mx-6 text-center">Dashboard</h1>
      <div className="flex items-center justify-center">
          <Separator className=" bg-slate-100/20 h-0.5 w-40" />
      </div>
      { session?.user.email === "nizabizaher@gmail.com" && (
      <div className="container mx-auto py-10"> 
        <div className="flex flex-col gap-5  w-full">
          <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            {cardData.map((data, index) => (
              <DashboardCard
                key={index}
                amount={data.amount}
                discription={data.discription}
                icon={data.icon}
                label={data.label}
              />
            ))}
          </section>
          <section className="grid grid-cols-1  gap-4 transition-all lg:grid-cols-2 text-slate-100">
            <DashboardCardContent>
              <section className="flex justify-between gap-2 text-slate-100 pb-2">
                <p>Sales Data</p>
                <CandlestickChart className="h-4 w-4" />
              </section>
              <BarChart />
            </DashboardCardContent>
            <DashboardCardContent>
              <section className="flex justify-between gap-2 text-slate-100 pb-2">
                <p>Recent Sales</p>
                <BadgeDollarSign className="h-4 w-4" />
                  
              </section>
              {uesrSalesData.map((data, index) => (
                <SalesCard
                  key={index}
                  email={data.email}
                  name={data.name}
                  saleAmount={data.saleAmount}
                />
              ))}
            </DashboardCardContent>
            <DashboardCardContent>
              <section className="flex justify-between gap-2 text-slate-100 pb-2">
                <p>Recent Users</p>
                <UserRoundCheck className="h-4 w-4" />
              </section>
              {userData.map((data, index) => (
                <UserDataCard
                  key={index}
                  email={data.email}
                  name={data.name}
                  time={data.time}
                />
              ))}
            </DashboardCardContent>
            <DashboardCardContent className="p-0">
              <DataTable columns={columns} data={courses} />
            </DashboardCardContent>
          </section>
        </div>
        
      </div>
      )}
    </div>
  )
}

export default DataPage
