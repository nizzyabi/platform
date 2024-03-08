// Courses Page
'use client'
import * as React from "react"
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useCurrentUser } from "@/hooks/user-current-user";
import { Button } from "@/components/ui/button";
import Search from "./search";



export default function Courses() {
  // AOS Effect
  
  const session = useCurrentUser();
  const nizzyuser = session?.id === 'clrulbr1h0000x3js9ldvplex';


    return (
      <div>
          <div className="text-center pt-40">
              <h1 className="font-bold text-7xl  pt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Courses</h1>
          </div>
          {nizzyuser && 
          <div className="flex items-center justify-center space-x-7 mt-6">
            <Link href='/courses/add'>
              <Button className="" variant="brand" size='brand' >Create</Button>
            </Link>
            <Link href='/admin'>
              <Button className='bg-slate-100 text-zinc-800' variant="brand" size='brand'>Admin</Button>
            </Link>
          </div>
          }
          {/*
          <Search />
          */}
      </div>
    )
  }
  