"use client"
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { SocialMedia } from "./social_media";


const SocialMediaLink = [
        {
          icon: Facebook,
          label: "Facebook",
          href: "www.facebook.com/skillup",
        },
        {
            icon: X,
            label: "Twitter",
            href: "www.twitter.com/skillup",
        },
        {
          icon: Instagram,
          label: "Instagram",
          href: "www.instagram.com/skillup",
        },
        {
          icon: Linkedin,
          label: "Linkedin",
          href: "www.linkedin.com/skillup",
        },

      ];

export const SocialMediaRoute = () => {
    return(
    <div className="flex">
        {SocialMediaLink.map((SocialMediaLink) => (
            <SocialMedia 
                key={SocialMediaLink.href}
                icon={SocialMediaLink.icon}
                label={SocialMediaLink.label}
                href={SocialMediaLink.href}
            />
        ))
    
    }
    </div>
    )
}