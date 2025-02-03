import Image from "next/image";
import React from "react";

const icons = [
    {
        image: {
            src: "/images/ilustrations/l1.png",
            alt: "l1",
        },
    },
    {
        image: {
            src: "/images/ilustrations/l2.png",
            alt: "l1",
        },
    },
    {
        image: {
            src: "/images/ilustrations/l3.png",
            alt: "l1",
        },
    },
    {
        image: {
            src: "/images/ilustrations/l4.png",
            alt: "l1",
        },
    },
];

const SocialSection = () => {
    return (
        <section className="relative isolate pt-0 pb-10 md:pb-24">
            <div className="mx-auto max-w-full px-5 md:max-w-[70%] md:px-0">
                <div className="grid grid-cols-4">
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className="flex w-full items-center justify-center"
                        >
                            <Image
                                src={icon.image.src}
                                alt={icon.image.alt}
                                loading="lazy"
                                width={1920}
                                height={1080}
                                className="w-16 md:w-32"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
