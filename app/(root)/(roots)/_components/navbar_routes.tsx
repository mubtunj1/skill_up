"use client";
import { usePathname, useRouter } from "next/navigation"
import { UserButton, useAuth } from "@clerk/nextjs";

import { ModeToggle } from "@/components/theme_toggle";
import { Button } from "@/components/ui/button"


export const NavbarRoutes = () => {
    const { userId } = useAuth();
    const pathname = usePathname();
    const router = useRouter()

    const isHomeLoggedIn = pathname === "/" && userId
    const isHomeLoggedOut = pathname === "/" && !userId
    return (
        <div className="flex gap-x-4 ml-auto">
            {isHomeLoggedIn && (
                <Button size="sm" variant="ghost" onClick={() => router.push("/dashboard")}>
                    Dashboard
                </Button>
            )}
            {isHomeLoggedOut && (
                <Button size="lg" variant="ghost" onClick={() => router.push("/sign-in")}>
                    Get Stated
                </Button>
            )}
            <ModeToggle />
            <UserButton
                afterSignOutUrl="/"
            />

        </div>
    )
}