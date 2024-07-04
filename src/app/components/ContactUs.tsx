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
          "relative mb-24 flex h-[530px] w-full max-w-screen-2xl flex-col px-8 sm:px-16",
          className,
        )}
        ref={contactUsRef}
        {...props}
      >
        <div className="mb-16 flex items-center gap-x-2">
          <div className="size-4 rounded-[4px] bg-unit-black-100" />
          <span className="text-lg">Contact Us</span>
        </div>
        <div className="relative m-auto flex max-w-lg flex-col items-center justify-center gap-y-12">
          <h3 className="text-[56px] z-10">Want to get in touch?</h3>
          <div className="flex w-full flex-col gap-y-4 z-10">
            <div className="w-full border-b border-unit-black-100 pb-4 text-lg">
              Send a message, and we’ll get back to you
            </div>
            <div className="grid w-fit grid-cols-3 items-center gap-2 sm:flex">
              <Link
                href="https://www.instagram.com/unit.network"
                className="flex size-10 items-center justify-center rounded-full bg-unit-black-100 p-1 text-white sm:size-8"
              >
                <FaInstagram className="size-6" />
              </Link>
              <Link href="https://t.me/unitfoundation">
                <FaTelegram className="size-10 sm:size-8" />
              </Link>
              <Link href="https://www.facebook.com/theunitnetwork">
                <FaFacebook className="size-10 sm:size-8" />
              </Link>
              <Link
                href="https://twitter.com/theunitnetwork"
                className="flex size-10 items-center justify-center rounded-full bg-unit-black-100 p-1 text-white sm:size-8"
              >
                <FaXTwitter className="size-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/theunitnetwork/"
                className="flex size-10 items-center justify-center rounded-full bg-unit-black-100 p-1 text-white sm:size-8"
              >
                <FaLinkedinIn className="size-6" />
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
            className="absolute w-1/2 -top-24 -right-44"
          />
          <Image
            src="/images/arrow-3d.webp"
            alt=""
            priority={true}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            className="absolute w-1/2 -bottom-24 -left-56"
          />
        </div>
      </section>
    );
  },
);

export default ContactUs;
