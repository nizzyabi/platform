import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
    const session = await auth();

    return (
        <div>
            {JSON.stringify(session)}
            <form action={async () => {
                "use server";

                await signOut();
            }}>
                <Button type='submit' variant="gold">Sign Out</Button>
            </form>
        </div>
    )
}

export default SettingsPage;
