import {Facebook, X, Instagram, Linkedin, LucideIcon} from "lucide-react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const onLinkClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={onLinkClick}
      type="button"
      className="flex items-center gap-x-1 text-slate-100 text-sm font-[500] pl-6 transition-all hover:text-green-600 hover:bg-white"
    >
      <div className="flex items-center gap-x-1 py-4">
        <Icon
          size={22}
          className="text-slate-500"
        />
      </div>
      <div
        className="ml-auto opacity-0 border-2 border-green-700 h-full transition-all"
      />
    </button>
  )
}