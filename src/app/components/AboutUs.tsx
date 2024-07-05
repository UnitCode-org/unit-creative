"use client";
import Image from "next/image";
import { forwardRef, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { useIndexRefStore } from "@/store/useIndexRefStore";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const AboutUs = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, _ref) => {
    const aboutUsRef = useRef<HTMLDivElement>(null);

    const { setAboutUsRef } = useIndexRefStore();

    useEffect(() => {
      setAboutUsRef(aboutUsRef);
    }, []);

    return (
      <section
        className={cn(
          "relative mb-24 flex w-full flex-col px-8 sm:px-16 max-w-screen-2xl",
          className,
        )}
        ref={aboutUsRef}
        {...props}
      >
        <div className="mb-6 lg:mb-16 flex items-center gap-x-2">
          <div className="size-4 rounded-[4px] bg-unit-black-100" />
          <span className="text-lg">About Us</span>
        </div>
        <h3 className="mb-20 sm:mb-6 max-w-lg text-[32px] sm:text-[56px] leading-tight">
          Innovating the future, one design at a time
        </h3>
        <div className="lg:ml-auto grid grid-cols-2 gap-x-6">
          <div className="flex max-w-96 flex-col gap-y-6">
            <div className="relative size-20">
              <Image
                src="/images/lightning-3d.svg"
                alt="Lightning Icon"
                fill
                sizes="100vw"
                priority={true}
                quality={100}
              />
            </div>
            <p className="text-xs sm:text-lg">
              At Unit Creative Studios, we are a collective of visionary
              designers and developers from all around the world dedicated to
              revolutionizing how brands connect with their audiences.
            </p>
          </div>
          <div className="flex max-w-96 flex-col gap-y-6">
            <div className="relative size-20">
              <Image
                src="/images/star-3d.svg"
                alt="Star Icon"
                fill
                sizes="100vw"
                priority={true}
                quality={100}
              />
            </div>
            <p className="text-xs sm:text-lg">
              From the initial spark of an idea to the final design, we
              collaborate closely with our clients to ensure every project
              reflects their vision and values. Once we understand what drives
              you, we broadcast it to the world.
            </p>
          </div>
        </div>
      </section>
    );
  },
);

export default AboutUs;
