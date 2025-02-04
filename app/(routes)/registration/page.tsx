"use client";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { RiLoader3Line, RiLoaderLine } from "@remixicon/react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        terms: false,
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("Submit and Generate QR Code");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("Submitting your request");
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            router.push(`/success?id=${data.id}`);

            if (!response.ok) {
                throw new Error(data.error || "Registration failed");
            }
        } catch (error) {
            console.error("Registration error:", error);
        } finally {
            setIsLoading(false);
            setMessage("Request submitted succesfully");
        }
    };

    return (
        <>
            <Header />
            {/* <main>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="first name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter your city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading
                            ? "Creating account..."
                            : "Submit and Generate QR Code"}
                    </button>
                </form>
            </main> */}
            <main>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="m-4 mx-auto mb-36 mt-20 w-full max-w-md font-ins"
                >
                    <h2 className="mb-6 text-center text-3xl text-black">
                        Register
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-black"
                            >
                                Name
                            </label>
                            <motion.input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-neutral-200 bg-white bg-opacity-50 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-black"
                            >
                                Email
                            </label>
                            <motion.input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-neutral-200 bg-white bg-opacity-50 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-black"
                            >
                                Phone
                            </label>
                            <motion.input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-neutral-200 bg-white bg-opacity-50 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="(123) 456-7890"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium text-black"
                            >
                                City
                            </label>
                            <motion.input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-neutral-200 bg-white bg-opacity-50 px-3 py-2 text-sm placeholder-gray-400 shadow-sm focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="New York"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                required
                                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                            />
                            <label
                                htmlFor="terms"
                                className="ml-2 block text-sm text-black"
                            >
                                I agree to the terms and conditions
                            </label>
                        </div>
                        <div>
                            <motion.button
                                whileHover={{ scale: 1.025 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-md border border-transparent bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                            >
                                {isLoading && (
                                    <RiLoader3Line className="animate-spin" />
                                )}
                                {message}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </main>

            <Footer />
        </>
    );
};

export default RegistrationPage;
