"use client";
import { usePathname, useRouter } from "next/navigation"
import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const HeroContents = () => {
    const router = useRouter();
    const { userId } = useAuth();
    const pathname = usePathname();
    const isHomeLoggedOut = pathname === "/" && !userId;
    return(
        
            
        <div className="p-10 gap-y-10">
            <h1 className="text-white text-5xl font-bold ">Ready to take your career<br/>to the next level?</h1>
            <h2 className="text-white text-3xl">Look no further than Skillup Institute</h2>
            <div className="py-3">
            {isHomeLoggedOut && (
            <Button size="lg" className="hover:bg-green-500" onClick={() => router.push("/sign-up")}>Get Started</Button>
            )}
            </div>
        </div>
    
    )
}