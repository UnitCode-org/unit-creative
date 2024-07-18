"use client";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

import { cn } from "@/lib/utils";

import { useIndexRefStore } from "@/store/useIndexRefStore";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const ContactUs = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, _ref) => {
    const contactUsRef = useRef<HTMLDivElement>(null);

    const { setContactUsRef } = useIndexRefStore();

    useEffect(() => {
      setContactUsRef(contactUsRef);
    }, []);

    return (
      <section
        className={cn(
          "relative mb-24 flex w-full max-w-screen-2xl flex-col px-8 sm:h-[530px] sm:px-16",
          className,
        )}
        ref={contactUsRef}
        {...props}
      >
        <div className="mb-6 flex items-center gap-x-2 lg:mb-16">
          <div className="size-4 rounded-[4px] bg-unit-black-100" />
          <span className="text-lg">Contact Us</span>
        </div>
        <div className="relative m-auto flex max-w-lg flex-col items-center justify-center gap-y-12">
          <h3 className="z-10 text-center text-[36px] sm:text-left sm:text-[56px]">
            Want to get in touch?
          </h3>
          <div className="z-10 flex w-full flex-col gap-y-8 sm:gap-y-4">
            <div className="w-full border-b border-unit-black-100 pb-4 text-xs sm:text-lg">
              Send a message, and we’ll get back to you
            </div>
            <div className="mx-auto grid w-fit grid-cols-3 items-center gap-2 sm:mx-0 sm:flex">
              <Link
                href="https://www.instagram.com/unit.network"
                target="_blank"
                className="flex size-14 items-center justify-center rounded-full bg-unit-black-100 p-1 text-white sm:size-8"
              >
                <FaInstagram className="size-9 sm:size-6" />
              </Link>
              <Link href="https://t.me/unitfoundation" target="_blank">
                <FaTelegram className="size-14 sm:size-8" />
              </Link>
              <Link
                href="https://www.facebook.com/theunitnetwork"
                target="_blank"
              >
                <FaFacebook className="size-14 sm:size-8" />
              </Link>
              <Link
                href="https://twitter.com/theunitnetwork"
                target="_blank"
                className="flex size-14 items-center justify-center rounded-full bg-unit-black-100 p-1 text-white sm:size-8"
              >
                <FaXTwitter className="size-9 sm:size-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/theunitnetwork/"
                target="_blank"
                className="flex size-14 items-center justify-center rounded-full bg-unit-black-100 p-1 text-white sm:size-8"
              >
                <FaLinkedinIn className="size-9 sm:size-6" />
              </Link>
            </div>
          </div>
          <Image
            src="/images/donut-3d.webp"
            alt=""
            priority={true}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            className="absolute -right-44 -top-24 hidden w-1/2 sm:block"
          />
          <Image
            src="/images/arrow-3d.webp"
            alt=""
            priority={true}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            className="absolute -bottom-24 -left-56 hidden w-1/2 sm:block"
          />
        </div>
      </section>
    );
  },
);

export default ContactUs;
