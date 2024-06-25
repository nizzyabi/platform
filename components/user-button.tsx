// User Button Avatar
'use client'
import { Avatar } from '@mui/material'
import { useCurrentUser } from '@/hooks/user-current-user'
import { useRouter } from 'next/navigation'
import { LogOut, LogOutIcon } from 'lucide-react'
import { signIn, signOut } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

const UserButton = () => {
  const session = useCurrentUser()
  const router = useRouter()
  const Logout = async () => {
    signOut()
    router.push('/auth/login')
  }
  const handleOpenModal = () => {
    const modal = document.getElementById('my_modal_2') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
};
const onClick = (provider: 'github') => {
  signIn(provider, {
    callbackUrl: DEFAULT_LOGIN_REDIRECT
  })
}
  const style = {
    width: {
      xs: 35,
      md: 40
    },
    height: {
      xs: 35,
      md: 40
    }
  }
  

  return (
    <>
      {!session ? (
        <>
          <button className=" flex md:hidden" onClick={handleOpenModal}>
            <LogOut className=" text-baseContent h-5.5 w-5 ml-1" />
          </button>
          <button onClick={handleOpenModal} className='hidden md:flex btn bg-primary border-none text-base100 hover:bg-primary'>
            Login
          </button>
          <dialog id="my_modal_2" className="modal text-baseContent bg-base100/10">
            <div className="modal-box text-baseContent bg-base100">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <h1 className='text-center font-bold text-lg'>Login</h1>
              <p className='text-center mt-2 text-sm'>Create an account to access the full platform</p>               
              <button onClick={() => onClick('github')} className='w-full btn bg-primary border-none text-base100 hover:bg-primary mt-4'><FaGithub className='h-6 w-6'/> Login With Github</button>          
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </>
      ) : (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className='ml-2 btn py-0 px-0 bg-transparent shadow-none border-none hover:bg-transparent'>
            
            <Avatar
              src={session.image ? session.image : ''}
              alt="logo"
              className="cursor-pointer bg-primary xs:mt-0.5 ml-0.5 md:my-0"
              sx={style}
            />  
          </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base100 rounded-box w-52">
              <li onClick={Logout} className=' cursor-pointer'>
                <a><LogOutIcon className='h-4 w-4'/> Logout</a>
              </li>
            </ul>
          </div>
      )}
    </>
  )
}

export default UserButton
