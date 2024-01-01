import { HomeNavbar } from "./_components/home_navbar"
const HomeLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return(
        <div className="h-full">
            <div className="h-[80px] fixed inset-y-0 w-full z-50">
                <HomeNavbar />
            </div>
            <main className="pt-[80px]">
                {children}
            </main>
        </div>
    )
}
export default HomeLayout;