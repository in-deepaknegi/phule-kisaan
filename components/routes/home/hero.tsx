"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
    RiFacebookFill,
    RiMessage2Fill,
    RiTwitterFill,
    RiYoutubeFill,
} from "@remixicon/react";

const HeroSection = () => {
    return (
        <section className="relative isolate -mt-[5rem] min-h-screen overflow-hidden font-ins">
            <div className="">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/home/h5.jpg"
                        className="h-full w-full object-cover"
                        alt=""
                        width={1920}
                        height={1080}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90" />
                </div>

                <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-10 pb-20 text-white md:justify-end md:px-20">
                    <div className="md:mr-auto md:max-w-5xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-4 flex items-center gap-2 uppercase tracking-wider text-white"
                        >
                            <span className="h-[1px] w-16 bg-white" />
                            Sustainable Farming
                            <span className="h-[1px] w-16 bg-white" />
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mb-6 font-cambo text-5xl text-yellow-400 md:text-[5rem]"
                        >
                            India&apos;s First Residue Free Live Demonstration And
                            National Level Exhibition
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mb-8 max-w-2xl text-xl"
                        >
                            At College Of Agriculture (MPKV RAHURI),
                            Shivajinagar, Pune 411-005
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-lg bg-tertiary px-5 py-3 text-white transition-colors hover:bg-teal-800"
                        >
                            Book your stall now
                        </motion.button>
                    </div>

                    <div className="absolute bottom-10 right-3 flex flex-col gap-4 md:right-10 md:top-1/2">
                        {[
                            {
                                Icon: RiTwitterFill,
                                href: "#",
                                label: "Twitter",
                            },
                            {
                                Icon: RiFacebookFill,
                                href: "#",
                                label: "Facebook",
                            },
                            {
                                Icon: RiYoutubeFill,
                                href: "#",
                                label: "YouTube",
                            },
                            {
                                Icon: RiMessage2Fill,
                                href: "#",
                                label: "Contact",
                            },
                        ].map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                className="rounded-full bg-white/30 p-3 backdrop-blur-md transition-colors hover:bg-white/20"
                                aria-label={label}
                            >
                                <Icon className="h-6 w-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
