import { Logo } from '@/components/logo'
import { NavbarRoutes } from './navbar_routes'
import Link from 'next/link'


export const HomeNavbar = () => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-teal-900 shadow-sm">
            <Link href={"/"}><Logo /></Link>
            <NavbarRoutes />
        </div>
    )    
}