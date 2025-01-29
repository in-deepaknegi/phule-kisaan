"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";
import useScrollTriggeredCountUp from "@/lib/use-counter";

const MetricSection = () => {
    const ref = useRef(null);

    // Example data
    // const items = [
    //     { value: 10, description: "Farmers Foot fall" },
    //     { value: 400, description: "Stalls" },
    //     { value: 41, description: "Exhibition Space(Indoor & Outdoor)" },
    //     { value: 100, description: "Residue Free Live Demo Plots" },
    // ];

    return (
        <div ref={ref} className="bg-white py-20 font-ins">
            <div className="mx-auto max-w-[90%] px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 space-y-6 text-center"
                >
                    <h3 className="flex items-center justify-center gap-2 uppercase tracking-wide text-primary">
                        <span className="h-[1px] w-16 bg-teal-600 font-medium" />
                        OUR ACHIEVEMENTS
                        <span className="h-[1px] w-16 bg-teal-600" />
                    </h3>
                    <h2 className="mx-auto max-w-2xl font-cambo text-4xl text-black md:text-5xl">
                        What we do speaks for what we&apos;ve achieved
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-700">
                        With a passionate team and years of dedication,
                        we&apos;ve touched the lives of countless children,
                        offering them hope, knowledge, and a path to a brighter
                        future.
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
                    <motion.div
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
                            {useScrollTriggeredCountUp(ref, 10)}
                            L+
                        </motion.div>
                        <p className="mx-auto text-lg text-neutral-700">
                            Farmers Foot fall
                        </p>
                    </motion.div>

                    <motion.div
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
                            {useScrollTriggeredCountUp(ref, 400)}+
                        </motion.div>
                        <p className="mx-auto text-lg text-neutral-700">
                            Stalls
                        </p>
                    </motion.div>

                    <motion.div
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
                            {useScrollTriggeredCountUp(ref, 41)}k
                            <span className="ml-3 text-2xl">sqm</span>
                        </motion.div>
                        <p className="mx-auto text-lg text-neutral-700">
                            Exhibition Space(Indoor & Outdoor)
                        </p>
                    </motion.div>

                    <motion.div
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
                            {useScrollTriggeredCountUp(ref, 100)}+
                        </motion.div>
                        <p className="mx-auto text-lg text-neutral-700">
                            Residue Free Live Demo Plots
                        </p>
                    </motion.div>
                    {/* {items.map((item, index) => (
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
                                {useScrollTriggeredCountUp(ref, item.value)}
                                {(index === 0 && "L+") ||
                                    (index === 1 && "+") ||
                                    (index === 2 && "K") ||
                                    (index === 3 && "+")}
                                <span className="ml-2 text-2xl">
                                    {index === 2 && "sqm"}
                                </span>
                            </motion.div>
                            <p className="mx-auto text-lg text-neutral-700">
                                {item.description}
                            </p>
                        </motion.div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default MetricSection;
