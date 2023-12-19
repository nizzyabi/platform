import { SignUpButton, UserButton, useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
export default function AuthBtn() {
const {userId} = useAuth();
  return (
    
    <div>
      
       {userId ? (
                    <Link href='/profile'>
                      <VpnKeyIcon className='hover:scale-105 transition-transform'/>
                    </Link>
                    
                
            ) : (
                <Link href='/sign-up'> 
                    
                        <VpnKeyIcon className='hover:scale-105 transition-transform'/>
                    
                </Link>
            )}
    </div>
  )
}
