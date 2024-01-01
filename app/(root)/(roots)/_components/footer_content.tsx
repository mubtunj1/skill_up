"use client";

import { Logo } from "@/components/logo";
import Image from "next/image";
import { SocialMedia } from "./social_media";
import { FooterNav, TermsLinks } from "./footer_link";
import { FooterLinkRoute } from "./footer_routes";
import { SocialMediaRoute } from "./socialmedia-route";


export const FooterContent = () =>{
    return (
        <div className="md:grid grid-cols-3 items-left">
            <div className="flex flex-col justify-between  px-10 ">
            <Image
            height={200}
            width={200}
            alt="logo"
            src="/skillup1.svg"
            />
            <p>Empowering individuals with the necessary
                 skills and knowledge to be self-reliant and
                successful in a rapidly changing and technology-driven world.</p>

              <div className="">
                <SocialMediaRoute />
            </div>
            </div>
            <div className=" flex  pl-10 md:item-left">
                <div className="flex flex-col py-10">
                    <p className="font-bold">Useful Content</p>
                <FooterLinkRoute FooterNav={FooterNav}/>
                </div>
                <div className="flex flex-col py-10">
                <p className="font-bold">Useful Content</p>
                <FooterLinkRoute FooterNav={TermsLinks}/>
                </div>
            </div>    
                
                <div className="flex flex-col bg-[url('/footer-bg.png')] bg-cover py-10 gap-y-2 item-center pl-10">
                    <p className="font-bold">Contact Us</p>
                    <p className="py-2 ">
                        27 Toni Adokwu Avenue<br />
                        Kubwa, Abuja<br />
                        Nigeria <br />
                        <strong>Phone:</strong> 081 6979 3233<br />
                        <strong>Email:</strong> info@sefrel.com<br />
                    </p>
                </div>
            
        </div>
                    
    )
}