"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 font-inter ${isScrolled ? "bg-white" : ""} transition-all duration-300 ease-in`}
        >
            <div className="mx-auto px-5 md:px-0 md:max-w-[85%]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-cambo ">
                        <Image
                            src="/images/logo-01.png"
                            alt="logo"
                            width={1080}
                            height={780}
                            className="size-16 md:size-20"
                        />
                        <span className="text-2xl font-ins font-semibold hidden md:block">Phule Kisaan</span>
                    </div>
                    <nav className="w-fit hidden md:block rounded-full bg-white/60 px-5 py-3 backdrop-blur-md">
                        <ul className="flex gap-12">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <button 
                            onClick={()=> scrollToSection("cta")}
                        className="rounded-lg border-2 px-4 py-2 text-sm md:text-base">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
