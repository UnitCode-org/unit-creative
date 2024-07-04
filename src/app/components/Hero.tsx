"use client";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { useIndexRefStore } from "@/store/useIndexRefStore";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const Hero = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    const { aboutUsRef } = useIndexRefStore();

    return (
      <section
        className={cn(
          "bg-hero flex w-full max-w-screen-2xl flex-col-reverse overflow-hidden bg-center bg-no-repeat px-8 pb-12 pt-32 sm:px-16 sm:pt-36 lg:min-h-screen lg:pb-0 mb-24",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center justify-between">
          <p className="w-96 text-lg">
            We are a collective of passionate designers & developers committed
            to bringing your branding vision to life with unforgettable designs.
          </p>
          <Button
            className="bg-unit-black-100"
            onClick={() => {
              if (aboutUsRef && aboutUsRef.current) {
                const top =
                  aboutUsRef.current.getBoundingClientRect().top +
                  window.scrollY - 100;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
          >
            Start your journey
          </Button>
        </div>
        <div className="z-20 my-auto flex items-center justify-between font-poppins text-6xl">
          <p>Where Vision</p>
          <p>Meets Reality</p>
        </div>
      </section>
    );
  },
);

export default Hero;
