'use client'
import { Button } from "@/components/ui/button";
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/user-current-user";
import {
    Card,
    CardContent,
  } from "@/components/ui/card";
import Link from "next/link";

const SettingsPage = () => {
    const session = useCurrentUser();
    const onClick = () => {
        logout();
    }
    return (
        <div className="h-full w-full flex flex-col space-y-20 items-center justify-center pt-40 ">
            {/* User Info */}
            <Card className="w-[600px] rounded shadow-lg border-none">
                {session && (
                    <div>
                        <div>
                            <h1 className="text-center text-5xl font-bold pt-5">User Info</h1>
                        </div>
                        
                        {/* User Name */}
                        <CardContent className="pt-10 space-y-6 font-bold">
                            <div className="flex flex-row items-center justify-between rounded p-3 shadow-sm shadow-white ">
                                <h2 className="text-2xl text-slate-300">name</h2>
                                <h2 className="text-xl text-white">
                                {session.name}<FavoriteIcon fontSize="large" className="text-red-500 pb-1"/>
                                </h2>
                            </div>
                        {/* User Email */}
                            <div className="flex flex-row items-center justify-between rounded p-3 shadow-sm shadow-white ">
                                <h2 className="text-2xl text-slate-300">email</h2>
                                <h2 className="text-xl text-white">
                                {session.email}<VerifiedIcon fontSize="large" className="text-blue-400 pb-1"/>
                                </h2>
                            </div>
                            
                        {/* User ID */}
                            <div className="flex flex-row items-center justify-between rounded p-3 shadow-sm shadow-white ">
                                <h2 className="text-2xl text-slate-300">user id</h2>
                                <h2 className="text-xl text-white">
                                {session.id}
                                </h2>
                            </div>
                        {/* Sign Out*/}
                        <div className="">
                        <Button type='submit' variant="goldHover" className="" onClick={onClick}>Sign Out</Button>
                        </div>
                        </CardContent>
                        
                    </div>
                    
                )}
                
            </Card>   
        </div>
    )
}

export default SettingsPage;
