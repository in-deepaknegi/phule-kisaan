import Image from "next/image";
import React from "react";

const FeatureSection = () => {
    return (
        <section className="bg-teal-800 pb-40 pt-32 font-inter">
            <div className="mx-auto max-w-[80%]">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h3 className="flex items-center gap-2 uppercase tracking-wider text-white">
                        <span className="h-[1px] w-16 bg-white" />
                        Join Us
                        <span className="h-[1px] w-16 bg-white" />
                    </h3>
                    <h2 className="max-w-xl font-cambo text-4xl font-light text-white md:text-6xl">
                        Why Exhibit at the Phule Krishi?
                    </h2>
                    <p className="text-lg font-light text-white">
                        Residue-Free Sustainable Farming Live Demo Plot &
                        Exhibition
                    </p>
                </div>
                <div className="mt-10 flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-0 md:space-x-10">
                    <div className="relative w-full">
                        <Image
                            src="/images/home/h3.jpg"
                            alt=""
                            width={1920}
                            height={1080}
                            className="rounded-xl object-cover"
                        />
                        <Image
                            src="/images/home/h5.jpg"
                            alt=""
                            width={1920}
                            height={1080}
                            className="absolute -bottom-20 -left-5 h-[12rem] w-52 rounded-xl object-cover md:-left-20 md:h-[15rem] md:w-80"
                        />
                    </div>
                    <div className="w-full">
                        <ul className="list-disc space-y-4 font-light text-white">
                            <li>
                                This Residue Free Farming Agri exhibition is the
                                premier platform to tap into the vast potential
                                of the agricultural sector under one roof.
                            </li>
                            <li>
                                This Exhibition, provides an opportunity to
                                showcase your innovations,products, services and
                                technologies spanning from pre-harvest to
                                post-harvest stages.
                            </li>
                            <li>
                                This platform also fosters valuable networking
                                opportunities with key groups, including
                                high-ranking agricultural officials, to explore
                                business and investment opportunities across
                                India.
                            </li>
                            <li>
                                The opportunity to see important companies and
                                international sectors together, Provide
                                opportunity to establish new business
                                connections by providing meeting between
                                exhibitors and Major suppliers.
                            </li>
                            <li>
                                Increasing your business by serving your farmers
                                by showcasing your latest and innovative
                                products on Live Agriculture Demo Plots
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
