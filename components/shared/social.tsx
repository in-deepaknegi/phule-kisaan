import Image from "next/image";
import React from "react";

const icons = [
    {
        image: {
            src: "/images/ilustrations/l1.jpg",
            alt: "l1",
        },
    },
    {
        image: {
            src: "/images/ilustrations/l2.jpg",
            alt: "l1",
        },
    },
    {
        image: {
            src: "/images/ilustrations/l3.jpg",
            alt: "l1",
        },
    },
    {
        image: {
            src: "/images/ilustrations/l4.jpg",
            alt: "l1",
        },
    },
    {
        image: {
            src: "/images/ilustrations/l5.jpg",
            alt: "l1",
        },
    },
];

const SocialSection = () => {
    return (
        <section className="relative isolate py-0">
            <div className="mx-auto max-w-full px-5 md:px-0 md:max-w-[80%]">
                <div className="grid grid-cols-3 gap-5 md:grid-cols-5 items-center md:gap-10">
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className="flex w-full items-center justify-center"
                        >
                            <Image
                                src={icon.image.src}
                                alt={icon.image.alt}
                                loading="lazy"
                                width={1080}
                                height={680}
                                className="w-24 md:w-36"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
