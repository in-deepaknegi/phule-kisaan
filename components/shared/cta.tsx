import React from "react";

const CtaSection = () => {
    return (
        <section
            id="cta"
            className="relative isolate px-5 py-24 font-inter md:px-0 md:py-36"
        >
            <div className="mx-auto max-w-7xl rounded-xl bg-teal-800">
                <div className="flex flex-col items-center justify-center space-y-6 p-8 text-center text-white">
                    <h3 className="flex items-center gap-2 uppercase tracking-wider text-white">
                        <span className="h-[1px] w-16 bg-white" />
                        Join us now!
                        <span className="h-[1px] w-16 bg-white" />
                    </h3>

                    <h1 className="font-cambo text-3xl text-white md:text-5xl">
                        Be Part Of The Residue Free Culture
                        <span className="block">
                            {" "}
                            Shaping The Future Of Farming.
                        </span>
                    </h1>

                    <p className="text-lg font-light text-white">
                        Book yout stall today.
                    </p>

                    <div className="mt-8">
                        <button className="transform rounded-lg bg-white px-8 py-3 font-semibold text-emerald-800 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-emerald-50 active:scale-95">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
