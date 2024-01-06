import {Facebook, X, Instagram, Linkedin, LucideIcon} from "lucide-react";
import { useRouter } from "next/navigation";
import  Link  from "next/link";

interface SocialMediaProps {
  icon: LucideIcon
  label: string
  href: string
}

export const SocialMedia = ({
  icon: Icon,
  label,
  href,
}: SocialMediaProps) => {
  
  return (
      <div className="flex items-center gap-x-2 py-4">
        <Link href={href} className="flex items-center gap-x-1 text-slate-100 text-sm font-[500] pl-6 transition-all">
        <Icon
          size={22}
          className="text-slate-500 hover:text-white transition-all"
        />
      </Link>
      </div>
  
  )
}