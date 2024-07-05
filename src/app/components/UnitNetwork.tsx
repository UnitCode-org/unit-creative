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
        <div className="mb-6 lg:mb-16 flex items-center gap-x-2">
          <div className="size-4 rounded-[4px] bg-unit-black-100" />
          <span className="text-lg">Unit Network</span>
        </div>
        <div className="flex flex-col-reverse lg:flex-col gap-y-6 lg:gap-y-8">
          <Link href='https://unit.network' className="flex h-32 sm:h-72 w-full items-center justify-center gap-x-2 rounded-2xl transition-all group hover:bg-unit-black-100 hover:text-white relative duration-500 !opacity-100">
            <div className="bg-unit-network-vertical lg:bg-unit-network absolute h-full w-full bg-cover bg-fixed bg-center bg-no-repeat group-hover:opacity-0 rounded-xl transition-all duration-500" />
            <div className="text-base sm:text-4xl z-10">
              Explore <span className="font-semibold">Unit Network</span>
            </div>{" "}
            <ArrowRightIcon className="z-10 size-6 sm:size-8"/>
          </Link>
          <div className="flex flex-col lg:flex-row justify-between font-poppins gap-y-4">
            <div className="text-2xl">Our greatest project yet</div>
            <div className="max-w-96 text-left lg:text-right text-xs sm:text-base lg:text-lg">
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
