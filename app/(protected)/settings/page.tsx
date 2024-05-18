'use client'

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/user-current-user";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useRouter } from 'next/navigation'

const SettingsPage = () => {
    const router = useRouter()
    const session = useCurrentUser();
    const onClick = () => {
        logout();
        router.push('/')
        router.refresh()
    }

    return !session ? (
        redirect('/')
      ) : (
        <div className="flex flex-col space-y-20 items-center justify-center pt-40 px-8 landing">
            <Tabs defaultValue="account" className="xs:w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="purchases">Purchases</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card className="p-2">
                        <CardHeader >
                            <CardTitle>Account</CardTitle>
                            <CardDescription>Make changes to your account here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name" className="text-xl font-semibold">Name</Label>
                                <h2>{session?.name}</h2>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email" className="text-xl font-semibold">Email</Label>
                                <h2>{session?.email}</h2>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="id" className="text-xl font-semibold">User ID</Label>
                                <h2>{session?.id}</h2>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type='submit' variant="default" onClick={onClick}>Sign Out</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                {/*TODO: Payment history & invoices*/}
                <TabsContent value="purchases">
                    <Card className="p-2">
                        <CardHeader>
                            <CardTitle>Purchases</CardTitle>
                            <CardDescription>See your purchases here</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="mb-3">
                                <Button type='submit' variant="default">Courses purchased</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default SettingsPage;
