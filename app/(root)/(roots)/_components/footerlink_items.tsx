"use client";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface FooterLinkProps {
    link: string;
    href: string;
}

export const FooterLink = ({
    link,
    href
}: FooterLinkProps) => {
    const router = useRouter();

    const onLinkClick = () => {
        router.push(href);
    }

    return (
        <button
            onClick={onLinkClick}
            type="button"
            className="flex items-center gap-x-2 text-slate-100 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20"
        >
            <div className="flex items-center gap-x-2 py-2">
                <ArrowRight size={20} />
                {link}
            </div>
            <div
                className="ml-auto opacity-0 border-2 border-green-700 h-full transition-all"
            />
        </button>
    );
};

   