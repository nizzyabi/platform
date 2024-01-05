import { auth } from "@/auth";

const UserName = async () => {
    const session = await auth(); 
  return (
    <div>
        {session!.user && (
                    <div>
                        <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">{session!.user.name}</h1>
                    </div>
                )}
    </div>
  )
}

export default UserName