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
          "lg:bg-hero flex w-full max-w-screen-2xl flex-col-reverse overflow-hidden bg-center bg-no-repeat px-8 pb-12 pt-32 sm:px-16 lg:pt-36 min-h-screen lg:pb-0 mb-24 gap-y-12",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12">
          <p className="lg:w-96 text-lg text-center lg:text-left">
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
        <div className="z-20 grow lg:my-auto flex flex-col lg:flex-row items-center justify-between font-poppins text-6xl bg-hero bg-no-repeat bg-center lg:bg-none">
          <p>Where Vision</p>
          <p>Meets Reality</p>
        </div>
      </section>
    );
  },
);

export default Hero;
