"use client";
import React from "react";
import { motion } from "motion/react";

function MetricSection() {
    return (
        <div className="bg-white py-20 font-ins">
            <div className="mx-auto max-w-[90%] px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 space-y-6 text-center"
                >
                    <h3 className="tracking-wide text-primary flex items-center justify-center gap-2 uppercase">
                        <span className="h-[1px] font-medium w-16 bg-teal-600" />
                        OUR ACHIEVEMENTS
                        <span className="h-[1px] w-16 bg-teal-600" />
                    </h3>
                    <h2 className="mx-auto max-w-2xl font-cambo text-4xl text-black md:text-5xl">
                        What we do speaks for what we&apos;ve achieved
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-700">
                        With a passionate team and years of dedication, we&apos;ve
                        touched the lives of countless children, offering them
                        hope, knowledge, and a path to a brighter future.
                    </p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 rounded-lg bg-tertiary px-4 py-2 font-normal text-white transition-colors hover:bg-teal-700"
                    >
                        Contribute Now
                    </motion.button>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-2 text-center"
                        >
                            <motion.div
                                className="font-cambo text-5xl md:text-7xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5 }}
                            >
                                {item.value}
                            </motion.div>
                            <p className="mx-auto text-lg text-neutral-700">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MetricSection;

const items = [
    {
        value: "64k",
        description: "Children helped in poverty with food and medicine",
    },
    {
        value: "56",
        description: "Different campaigns around the world",
    },
    {
        value: "128",
        description: "Volunteers who work extremely hard every week",
    },
    {
        value: "$1.2M",
        description: "Raised to help the children in need",
    },
];
