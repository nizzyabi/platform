import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';import Image from "next/image";
const SettingsPage = async () => {
    const session = await auth();
    // Get when user was created
    

    return (
        <div>
            <div>
                {session!.user && (
                    <div>
                        <div>
                            <h1 className="text-center text-5xl font-extrabold pt-5">Settings</h1>
                        </div>
                        {/* Separator*/}
                        <div className='flex items-center justify-center'>
                            <Separator className='w-20 h-2 rounded bg-slate-200 mt-3'/>
                        </div>
                        <div className="ml-20 pt-10 space-y-6">
                            <h2 className="text-3xl font-bold text-slate-300"><span className="text-white">Name:</span> {session!.user.name} <FavoriteIcon fontSize="large" className="text-red-500 pb-1"/></h2>
                            <h2 className="text-3xl font-bold text-slate-300"><span className="text-white">Email:</span> {session!.user.email} <VerifiedIcon fontSize="large"  className="text-blue-400 pb-0.5"/></h2>

                            <h2 className="text-3xl font-bold text-slate-300">
                                <span className="text-white ">Account Type:</span>
                                 <span className="ml-2 border p-1 rounded border-orange-300 text-orange-300"> Appollo
                                 </span>
                            </h2>
                            
                        </div>
                        
                    </div>
                    
                )}
                
            </div>
            
            <form action={async () => {
                "use server";

                await signOut();
            }}>
                <Button type='submit' variant="gold" className="ml-20">Sign Out</Button>
            </form>
            
        </div>
    )
}

export default SettingsPage;
