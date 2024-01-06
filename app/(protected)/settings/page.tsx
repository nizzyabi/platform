import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubCalendar from 'react-github-calendar';
import { number } from "zod";
const SettingsPage = async () => {
    const session = await auth();
    // Get when user was created
    

    return (
        <div>
            {/*JSON DATA*/}

            
            
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
                        {/* User Name */}
                        <div className="ml-20 pt-10 space-y-6">
                            <h2 className="text-2xl font-bold text-slate-300">
                                <span className="text-white">name:</span> 
                                <span className="text-xl"> {session!.user.name} </span>
                                <FavoriteIcon fontSize="large" className="text-red-500 pb-1"/>
                            </h2>
                        {/* User Email */}
                            <h2 className="text-2xl font-bold text-slate-300">
                                <span className="text-white">email:</span>
                                <span className="text-xl"> {session!.user.email}</span> 
                                <VerifiedIcon fontSize="large" className="text-blue-400 pb-0.5"/>
                            </h2>
                        {/* Account Purchases */}
                            <h2 className="text-2xl font-bold text-slate-300">
                                <span className="text-white ">account type:</span>
                                <span className="text-xl border p-0.5 px-1 ml-2 rounded border-orange-300 text-orange-300 border-dotted">{session!.user.role}
                                </span>        
                            </h2>
                        {/*User Id*/}
                            <h2 className="text-2xl font-bold text-slate-300">
                                <span className="text-white ">user id: </span>
                                <span className="text-xl">{session!.user.id}
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
