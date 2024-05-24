
import { redirect } from "next/navigation";
import { columns } from "../courses/_components/colums"
import { DataTable } from "../courses/_components/data-table"
import BarChart from "../courses/_components/barchart";

import DashboardCard, { DashboardCardContent, DashboardCardProps } from "../courses/_components/dashboard-card";
import SalesCard, { SalesProps} from "../courses/_components/sales-card";
import UserDataCard, {UserDataProps} from "../courses/_components/user-data-card";
import { auth } from "@/auth"
import { db } from "@/lib/db";
import { CreditCard, DollarSign, User, BadgeDollarSign, UserRoundCheck, CandlestickChart, MonitorPlay } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from 'date-fns';





const DataPage = async () => {
    const session = await auth();

    if (!session) {
        return redirect('/')
    }

    const userCount = await db.account.count();

    const salesCount = await db.purchase.count();

    const purchases = await db.purchase.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 7,
      include: {
        course: true,
      },
    });

    const totalRevenue = purchases.reduce((sum, purchase) => sum + (purchase.course.price || 0), 0)

    const courseCount = await db.course.count({
      where: {
        isPublished: true
      }
    })
    const courses = await db.course.findMany({
        where: {
          userId: session.user.id ?? ''
        },
        orderBy: {
            createdAt: 'desc'
        },
    });
    const recentUsers = await db.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 7,
    })

    const cardData: DashboardCardProps[] = [
      {
        label: "Total Revenue",
        amount: `$${totalRevenue}`,
        icon: DollarSign
      },
      {
        label: "Users",
        amount: `+${userCount}`,
        icon: User
      },
      {
        label: "Sales",
        amount: `+${salesCount}`,
        icon: CreditCard
      },
      {
        label: "Courses Created",
        amount: `+${courseCount}`,
        icon: MonitorPlay
      }
    ];
    
    const uesrSalesData: SalesProps[] = await Promise.all(purchases.map(async (purchase) => {
      const user = await db.user.findUnique({
        where: { id: purchase.userId },
      });
      return {
        name: user?.name || 'Unknown',
        email: user?.email || 'No email',
        image: user?.image || '/mesh.jpeg',
        saleAmount: `+$${(purchase.course.price || 0).toFixed(2)}`,
      };
    }));
    
    const userData: UserDataProps[] = recentUsers.map(account => ({
      name: account.name || 'Unknown',
      email: account.email || 'No email',
      image: account.image || '/mesh.jpeg',
      time: formatDistanceToNow(new Date(account.createdAt), { addSuffix: true }),
    }));

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
                  image={data.image}
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
                  image={data.image}
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
