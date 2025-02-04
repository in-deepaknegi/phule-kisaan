"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import {
    RiFacebookFill,
    RiMessage2Fill,
    RiTwitterFill,
    RiYoutubeFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const images = [
    {
        image: {
            src: "/images/home/h5.jpg",
            alt: "Image 1",
        },
    },
    {
        image: {
            src: "/images/home/h4.jpg",
            alt: "Image 1",
        },
    },
    {
        image: {
            src: "/images/home/h3.jpg",
            alt: "Image 1",
        },
    },
    {
        image: {
            src: "/images/home/h2.jpg",
            alt: "Image 1",
        },
    },
];

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true }),
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.8,
            }}
        >
            <Carousel
                plugins={[plugin.current]}
                className="relative isolate -mt-[5rem] min-h-screen w-full max-w-full overflow-hidden"
                // onMouseEnter={plugin.current.stop}
                // onMouseLeave={plugin.current.reset}
            >
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 md:from-black/90" />

                <CarouselContent className="absolute inset-0 -ml-0">
                    {images.map((image, i) => (
                        <CarouselItem key={i} className="pl-0">
                            <Image
                                src={image.image.src}
                                alt={image.image.alt}
                                width={1920}
                                height={1080}
                                className="h-full w-full max-w-full object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
                <div className="absolute right-[95%] top-[95%] z-50 flex h-full items-center justify-between md:right-36 md:top-[90%]">
                    <CarouselPrevious className="left-0 top-0 h-10 w-10 bg-white/80 backdrop-blur-sm [&_svg]:size-6" />
                    <CarouselNext className="left-16 top-0 h-10 w-10 bg-white/80 backdrop-blur-sm [&_svg]:size-6" />
                </div>

                <div className="absolute z-40 h-full w-full">
                    <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-10 pb-32 text-white md:justify-end md:px-20 md:pb-20">
                        <div className="md:mr-auto md:max-w-5xl">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mb-4 flex items-center gap-2 uppercase tracking-wider text-white"
                            >
                                <span className="h-[1px] w-16 bg-white" />
                                Sustainable Farming
                                <span className="h-[1px] w-16 bg-white" />
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mb-6 font-cambo text-4xl text-yellow-400 md:text-7xl"
                            >
                                India&apos;s First Residue Free Live
                                Demonstration And National Level Exhibition
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mb-8 max-w-sm text-lg md:max-w-2xl md:text-xl"
                            >
                                At College Of Agriculture (MPKV RAHURI),
                                Shivajinagar, Pune 411-005
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-lg bg-tertiary w-fit px-5 py-3 text-white transition-colors hover:bg-teal-800"
                            >
                                <Link href="/registration">
                                    Book your stall now
                                </Link>
                            </motion.div>
                        </div>

                        <div className="absolute bottom-5 right-3 flex flex-col gap-2 md:right-10 md:top-1/2 md:gap-4">
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
                                    <Icon className="size-5 md:size-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Carousel>
        </motion.div>
    );
}
