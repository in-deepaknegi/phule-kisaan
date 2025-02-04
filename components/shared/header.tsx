"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";

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
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1,
            }}
            className={`sticky top-0 z-50 font-inter ${isScrolled ? "bg-white" : ""} transition-all duration-300 ease-in`}
        >
            <div className="mx-auto px-5 md:max-w-[85%] md:px-0">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-cambo"
                    >
                        <Image
                            src="/images/logo-01.png"
                            alt="logo"
                            width={680}
                            height={170}
                            className="size-16 md:size-20"
                        />
                        <span className="hidden font-ins text-2xl font-semibold md:block">
                            Phule Kisaan
                        </span>
                    </Link>
                    <nav className="hidden w-fit rounded-full bg-white/60 px-5 py-3 backdrop-blur-md md:block">
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
                        <Link
                            href="/registration"
                            className="rounded-lg border-2 px-4 py-2 text-sm md:text-base"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
