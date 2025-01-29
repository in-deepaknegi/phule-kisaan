"use client";
import React, { useState } from "react";
import {
    RiInstagramFill,
    RiTwitterFill,
    RiYoutubeFill,
} from "@remixicon/react";
import Image from "next/image";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribing email:", email);
        setEmail("");
    };

    const linkGroups = {
        "QUICK LINKS": ["About Us", "Campaigns", "Blogs", "Contact Us"],
        POLICIES: ["Terms & Conditions", "Privacy Policy", "Cookie Policy"],
        SOCIALS: [
            { name: "Twitter", icon: <RiTwitterFill className="h-5 w-5" /> },
            {
                name: "Instagram",
                icon: <RiInstagramFill className="h-5 w-5" />,
            },
            { name: "YouTube", icon: <RiYoutubeFill className="h-5 w-5" /> },
        ],
    };

    return (
        <>
            <footer className="overflow-hidden bg-white p-4 font-inter md:p-8">
                <div className="relative z-40 overflow-hidden rounded-2xl bg-[#e1edec] p-10 md:p-20">
                    <div className="container mx-auto px-0 md:px-4">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                            <div className="space-y-6">
                                <h2 className="font-cambo text-4xl">
                                    Subscribe to our newsletter to receive
                                    updates!
                                </h2>
                                <p className="text-base text-neutral-700 md:text-lg">
                                    Subscribe to stay informed about our new
                                    campaigns, blogs and other projects.
                                </p>
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-wrap gap-4"
                                >
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                    <button
                                        className="rounded-lg bg-teal-800 px-6 py-3 font-medium text-white transition-colors hover:bg-teal-600"
                                        type="submit"
                                    >
                                        Subscribe Now
                                    </button>
                                </form>
                            </div>

                            <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
                                {Object.entries(linkGroups).map(
                                    ([title, links]) => (
                                        <div key={title}>
                                            <h3 className="mb-4 font-semibold text-teal-600">
                                                {title}
                                            </h3>
                                            <ul className="space-y-3">
                                                {links.map((link, index) => (
                                                    <li key={index}>
                                                        {typeof link ===
                                                        "string" ? (
                                                            <a
                                                                href="#"
                                                                className="text-gray-600 transition-colors hover:text-teal-600"
                                                            >
                                                                {link}
                                                            </a>
                                                        ) : (
                                                            <a
                                                                href="#"
                                                                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-teal-600"
                                                            >
                                                                {link.icon}
                                                                {link.name}
                                                            </a>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
                        <div className="flex gap-4">
                            <Image
                                src="/images/ilustrations/i1.png"
                                alt=""
                                width={1920}
                                height={1080}
                                className="size-16 rounded-full object-cover md:size-20"
                            />
                            <Image
                                src="/images/ilustrations/i2.png"
                                alt=""
                                width={1080}
                                height={680}
                                className="size-16 rounded-full object-cover md:size-20"
                            />
                            <Image
                                src="/images/ilustrations/i3.png"
                                alt=""
                                width={1080}
                                height={680}
                                className="size-16 rounded-full object-cover md:size-20"
                            />
                            <Image
                                src="/images/ilustrations/i4.png"
                                alt=""
                                width={1080}
                                height={680}
                                className="size-16 rounded-full object-cover md:size-20"
                            />
                            <Image
                                src="/images/ilustrations/i5.png"
                                alt=""
                                width={1080}
                                height={680}
                                className="hidden size-20 rounded-full object-cover md:block"
                            />
                        </div>
                        <div className="">
                            <p className="text-center text-gray-600">
                                Phule Kisaan© 2025 All Rights Reserved.
                            </p>
                        </div>
                    </div>

                    <div>
                        {/* <Globe className="-right-40 -bottom-40" /> */}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
