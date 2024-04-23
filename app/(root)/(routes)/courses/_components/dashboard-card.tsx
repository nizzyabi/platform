/** @format */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type DashboardCardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};

export default function DashboardCard(props: DashboardCardProps) {
  return (
    <DashboardCardContent>
      <section className="flex justify-between gap-2 text-slate-100">
        {/* label */}
        <p className="text-sm">{props.label}</p>
        {/* icon */}
        <props.icon className="h-4 w-4" />
      </section>
      <section className="flex flex-col gap-1 text-slate-100">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs">{props.description}</p>
      </section>
    </DashboardCardContent>
  );
}

export function DashboardCardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-[5px] p-5 shadow bg-[#111010]",
        props.className
      )}
    />
  );
}