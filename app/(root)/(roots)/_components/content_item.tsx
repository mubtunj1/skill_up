"use client"
import { LucideIcon } from "lucide-react";

interface HomeContentsItemsProps {
    icon: LucideIcon;
    label: string;
    content: string;
}
export const HomeContentsItems = ({
    icon: Icon,
    label,
    content,
}:HomeContentsItemsProps) => {
    return(
        <div className="p-4 transform transition-transform rounded-lg shadow-lg hover:scale-105 md:h-96 md:w-72">
            <div className="flex flex-col items-center gap-x-2 w-full text-center py-10 px-8">
                <Icon size={40} className="text-4xl text-green-600 bx bx-cube-alt"/>
                <h3 className="mt-4 text-lg font-semibold">{label}</h3>
                <p className="mt-2 text-gray-600">{content}</p>
            </div>
            
        </div>
    )

}