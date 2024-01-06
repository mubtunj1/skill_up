"use client";
import { BookMarked, Box, Timer } from "lucide-react";
import { HomeContentsItems } from "./content_item";

const HomeContentsItem = [
    {
        Icon: BookMarked,
        label: "Learn from the best",
        content: "Our courses are taught by industry experts who have years of experience in their respective fields.",
    },
    {
        Icon: Box,
        label: "Cutting-Edge Curriculum",
        content: "Our courses are designed to teach you the most relevant skills in the industry.",
    },
    { 
        Icon: Timer,
        label: "Flexible learning options",
        content: "Learn at your own pace with our flexible learning options.",
    },
    {
        Icon: BookMarked,
        label: "Learn from the best",
        content: "Our courses are taught by industry experts who have years of experience in their respective fields.",
    },

]

export const HomeContents = () => {
    return(
        <div className="  xl:flex-grow justify-between justify-items-center gap-y-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {HomeContentsItem.map((item) => (
                <HomeContentsItems
                    key={item.label}
                    icon={item.Icon}
                    label={item.label}
                    content={item.content}
                />
            ))}
        </div>
    )
}   