"use client";
import { RiPlayLargeLine } from "@remixicon/react";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
    return (
        <div className="relative font-ins">
            <div className="absolute z-10 h-full w-full bg-white/40"></div>
            <Image
                src={"/images/home/bg_crop.png"}
                alt="backgroud"
                width={1920}
                height={1080}
                className="absolute bottom-0 z-0 h-72 w-full bg-repeat-x object-cover"
            />
            <div className="container relative z-40 mx-auto max-w-[90%] px-0 py-16 md:py-36">
                <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <Image
                            src="/images/home/h2.jpg"
                            alt="Children smiling"
                            width={1920}
                            height={1080}
                            className="h-[550px] w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>

                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-4 flex items-center gap-2 font-medium uppercase tracking-wider text-primary"
                        >
                            About Phule Kisaan
                            <span className="h-[1px] w-16 bg-neutral-300" />
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="font-cambo text-4xl leading-tight text-gray-900 md:text-6xl"
                        >
                            Sustainable Farming Practices Through Innovation and
                            Education
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="max-w-xl text-base text-neutral-700"
                        >
                            Phule Kisaan is India&apos;s pioneering platform
                            dedicated to promoting sustainable farming practices
                            through innovation and education. As the nation&apos;s
                            first Residue Free Farming Live Demo Plot &
                            Exhibition, we bring together agricultural
                            stakeholders, innovators, and enthusiasts to explore
                            and showcase the latest advancements in agriculture.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.025 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-tertiary inline-flex items-center gap-2 rounded-lg px-4 py-2 font-normal text-white transition-colors hover:bg-teal-700"
                            >
                                Watch Video
                                <RiPlayLargeLine className="mr-2 h-5 w-5" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
