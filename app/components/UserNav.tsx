import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";



export default function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>

                <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
                    <Avatar className="h-10 w-10 rounded-sm">

                        <AvatarImage src="https://siurfxqibudwqebaetaq.supabase.co/storage/v1/object/public/user%20image/avatar.png?t=2024-11-14T17%3A18%3A26.153Z" />
                        <AvatarFallback className="rounded-sm">Jan</AvatarFallback>

                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                    <div className="flex flex-col space-y-2">
                        <p className="text-sm font-medium leading-none">Jamison ijuukuh</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            jkasdf@asdkfj.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem  onClick={() => signOut()}>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )


}