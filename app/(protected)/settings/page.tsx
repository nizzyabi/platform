'use client'
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

const SettingsPage = () => {
    const session = useCurrentUser();
    const onClick = () => {
        logout();
    }
   
    
    return (
        <div className="flex flex-col space-y-20 items-center justify-center pt-40 px-8">
            <Tabs defaultValue="account" className="sm:w-[250px] md:w-[400px] lg:w-[600px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>

                    <TabsTrigger value="payment">Payment</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader >
                            <CardTitle>Account</CardTitle>
                                <CardDescription>
                                    Make changes to your account here.
                                </CardDescription>
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
                                <Button type='submit' variant="goldHover" onClick={onClick}>Sign Out</Button>
                            </CardFooter>
                    </Card>
                </TabsContent>
                {/*TODO: Payment history & invoices*/}
                <TabsContent value="payment">
                    <Card>
                        <CardHeader>
                            <CardTitle>Payments</CardTitle>
                                <CardDescription>
                                    Manage your payments here.
                                </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                
                                <Button type='submit' variant="pinkHover">Payment History</Button>
                            </div>
                            <div className="space-y-2">
                                
                                <Button type='submit' variant="blueHover" >Invoices</Button>
                            </div>
                        </CardContent>
                        
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default SettingsPage;
