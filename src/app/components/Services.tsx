"use client";
import Image from "next/image";
import { forwardRef, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

import { useIndexRefStore } from "@/store/useIndexRefStore";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const Services = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, _ref) => {
    const servicesRef = useRef<HTMLDivElement>(null);

    const { setServicesRef } = useIndexRefStore();

    useEffect(() => {
      setServicesRef(servicesRef);
    }, []);

    return (
      <section
        className={cn(
          "relative mb-24 flex w-full max-w-screen-2xl flex-col px-8 sm:px-16",
          className,
        )}
        ref={servicesRef}
        {...props}
      >
        <div className="mb-6 lg:mb-16 flex items-center gap-x-2">
          <div className="size-4 rounded-[4px] bg-unit-black-100" />
          <span className="text-lg">Our Services</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="group flex h-40 lg:h-[342px] w-full transition-all flex-col rounded-2xl border border-unit-black-100 bg-unit-black-100 p-6 hover:bg-white 2xl:h-96">
            <h4 className="mt-auto text-3xl text-white group-hover:hidden">
              What
              <br />
              we offer?
            </h4>
            <h4 className="mt-auto hidden text-3xl text-unit-black-100 group-hover:block">
              Tailored solutions for every vision.
            </h4>
          </div>
          <div className="flex h-40 lg:h-[342px] w-full flex-col items-end justify-between rounded-2xl border border-unit-black-100 bg-white p-6 2xl:h-96">
            <div className="relative size-8 min-w-8 min-h-8 lg:size-12 lg:min-w-12 lg:min-h-12">
              <Image
                src="/images/donut-2d.svg"
                alt="Donut Icon"
                fill
                sizes="100vw"
                priority={true}
                quality={100}
              />
            </div>
            <h4 className="text-xs sm:text-lg text-unit-black-100">
              We provide a<br />
              comprehensive range of services for those looking to tokenize
              their assets on the Unit Network platform.
            </h4>
          </div>
          <div className="flex h-40 lg:h-[342px] w-full flex-col items-end justify-between rounded-2xl border border-unit-black-100 bg-white p-6 2xl:h-96">
            <div className="relative size-8 min-w-8 min-h-8 lg:size-12 lg:min-w-12 lg:min-h-12">
              <Image
                src="/images/lightning-2d.svg"
                alt="Donut Icon"
                fill
                sizes="100vw"
                priority={true}
                quality={100}
              />
            </div>
            <h4 className="text-xs sm:text-lg text-unit-black-100">
              Whether you need a complete brand design, or specific brand
              resources, our tailored solutions are crafted to meet your unique
              needs.
            </h4>
          </div>
          <div className="flex h-40 lg:h-[342px] w-full flex-col items-end justify-between rounded-2xl border border-unit-black-100 bg-white p-6 2xl:h-96">
            <div className="relative size-8 min-w-8 min-h-8 lg:size-12 lg:min-w-12 lg:min-h-12">
              <Image
                src="/images/star-2d.svg"
                alt="Donut Icon"
                fill
                sizes="100vw"
                priority={true}
                quality={100}
              />
            </div>
            <h4 className="text-xs sm:text-lg text-unit-black-100">
              We aim to ensure your brand stands out and help you make a lasting
              impression.
            </h4>
          </div>
        </div>
      </section>
    );
  },
);

export default Services;
