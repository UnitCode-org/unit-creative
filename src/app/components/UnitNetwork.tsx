"use client";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const UnitNetwork = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn(
          "relative mb-24 flex w-full max-w-screen-2xl flex-col px-8 sm:px-16",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="mb-6 flex items-center gap-x-2 lg:mb-16">
          <div className="size-4 rounded-[4px] bg-unit-black-100" />
          <span className="text-lg">Unit Network</span>
        </div>
        <div className="flex flex-col-reverse gap-y-6 lg:flex-col lg:gap-y-8">
          <Link
            target="_blank"
            href="https://unit.network"
            className="group relative flex h-32 w-full items-center justify-center gap-x-2 rounded-2xl !opacity-100 transition-all duration-500 hover:bg-unit-black-100 hover:text-white sm:h-72"
          >
            <div className="absolute h-full w-full rounded-xl bg-unit-network-vertical bg-cover bg-fixed bg-center bg-no-repeat transition-all duration-500 group-hover:opacity-0 lg:bg-unit-network" />
            <div className="z-10 text-base sm:text-4xl">
              Explore <span className="font-semibold">Unit Network</span>
            </div>{" "}
            <ArrowRightIcon className="z-10 size-6 sm:size-8" />
          </Link>
          <div className="flex flex-col justify-between gap-y-4 font-poppins lg:flex-row">
            <div className="text-2xl">Our greatest project yet</div>
            <div className="max-w-96 text-left text-xs sm:text-base lg:text-right lg:text-lg">
              Unit Network redefines a new financial system, powered by AI,
              blockchain, and the tokenization of assets in the real world.{" "}
            </div>
          </div>
        </div>
      </section>
    );
  },
);

export default UnitNetwork;
