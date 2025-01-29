"use client";
import React from "react";
import { motion } from "motion/react";

function SupporSection() {
    return (
        <div className="bg-white py-20 font-ins">
            <div className="mx-auto px-10 md:max-w-[88%] md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 space-y-6 text-center"
                >
                    <h3 className="flex items-center justify-center gap-2 font-medium uppercase tracking-wide text-primary">
                        <span className="h-[1px] w-16 bg-teal-600" />
                        Must Visit
                        <span className="h-[1px] w-16 bg-teal-600" />
                    </h3>
                    <h2 className="mx-auto max-w-2xl font-cambo text-4xl text-black md:text-5xl">
                        Institutes Who Must Exhibit
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-700">
                        Customised Stalls Setup Available For Companies On
                        Advance Order Basis
                    </p>
                </motion.div>

                <div className="flex flex-col items-start justify-center md:flex-row md:gap-20">
                    <ul className="list-disc space-y-2 text-neutral-800">
                        {items.slice(0, 19).map((item) => (
                            <li key={item.id} className="">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <ul className="list-disc space-y-2 text-neutral-800">
                        {items.slice(20, 37).map((item) => (
                            <li key={item.id} className="">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SupporSection;

const items = [
    { id: 1, name: "Organic / Bio-Fertilizer Producers & Suppliers" },
    { id: 2, name: "Bio Pesticide/Fungicide Producers & Suppliers" },
    {
        id: 3,
        name: "Fruit & Vegetable Seeds & Seedlings Producers & Suppliers",
    },
    { id: 4, name: "Residue Free Inputs Raw Material Importers & Suppliers" },
    { id: 5, name: "Agricultural Input Consultants" },
    { id: 6, name: "Various Horticultural Crop Associations" },
    { id: 7, name: "Different Nurseries / Garden Tools & Landscaping" },
    { id: 8, name: "Agricultural College/ Research Institutes" },
    { id: 9, name: "Veterinary / Livestock & Dairy Farming / Goshala" },
    { id: 10, name: "Drip / Sprinkle / Pipe Producers and Suppliers" },
    { id: 11, name: "Drone Producers and Suppliers" },
    { id: 12, name: "Start-ups & Indian Jugad Technology" },
    { id: 13, name: "Various Government Authorities" },
    { id: 14, name: "Agricultural Machinery & Equipment Producers" },
    { id: 15, name: "Farmer Producer Companies & FPC Federations" },
    { id: 16, name: "Women / Men Self Help Groups & Societies" },
    { id: 17, name: "Agro & Food Processing Industries" },
    { id: 18, name: "Small Scale Agro Industries" },
    { id: 19, name: "Hotel / Food Stall" },
    { id: 20, name: "Educationists & Students" },
    { id: 21, name: "Fresh Fruit & Vegetable Growers" },
    { id: 22, name: "Greenhouse & Hydroponics Consultants" },
    { id: 23, name: "Bankers, Investors" },
    { id: 24, name: "Agri Insurance Companies and Institutions" },
    {
        id: 25,
        name: "Biotechnology / Floriculture / Greenhouses / Horticulture",
    },
    { id: 26, name: "Plasticulture" },
    { id: 27, name: "Renewable Energy & Waste Management" },
    { id: 28, name: "Software Companies & Hardware Companies" },
    { id: 29, name: "Artificial Intelligence / IoT" },
    { id: 30, name: "Garden Tools & Landscaping" },
    { id: 31, name: "Solar Companies" },
    { id: 32, name: "Process & Packaging Technology" },
    { id: 33, name: "Cold-chain Equipment, Machinery & Services" },
    { id: 34, name: "Marketing, Export" },
    { id: 35, name: "Animal Hygiene and Veterinary Services" },
    { id: 36, name: "Beekeeping and Beekeeping Equipment" },
    { id: 37, name: "Agriculture Commodity Traders & Buyers" },
];
