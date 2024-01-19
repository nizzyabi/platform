export { GET, POST } from "@/auth"

callbacks: {
    session: async (session:any, user:any) => {
      session.userId = user.id;    
      return Promise.resolve(session);
    }
  }