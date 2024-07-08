"use client";
import unitCreativeIcon from "@public/images/unit-creative-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

import { cn } from "@/lib/utils";

import { useIndexRefStore } from "@/store/useIndexRefStore";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";

function Navbar() {
  const { aboutUsRef, servicesRef, contactUsRef } = useIndexRefStore();

  const [isScrolled, setIsScrolled] = useState(true);
  const checkScroll = () => {
    if (window.scrollY >= 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <Sheet>
      <nav
        className={cn(
          "fixed left-0 top-0 z-[60] w-screen font-poppins",
          isScrolled && "bg-white/10 backdrop-blur-md",
        )}
        style={{ WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none"}}
      >
        <div className="mx-auto flex w-full max-w-screen-2xl items-center gap-x-8 px-8 py-6 transition-all sm:px-16">
          <div className="mr-auto flex items-center gap-x-3">
            <Link href="/" className="relative size-8">
              <Image
                src={unitCreativeIcon}
                alt="Unit Network"
                fill
                sizes="100vw"
                priority={true}
                quality={100}
              />
            </Link>
            <h1 className="hidden text-xl sm:block">Unit Creative</h1>
          </div>
          <div className="hidden items-center gap-x-8 md:flex">
            <div
              className="cursor-pointer"
              onClick={() => {
                if (aboutUsRef && aboutUsRef.current) {
                  const top =
                    aboutUsRef.current.getBoundingClientRect().top +
                    window.scrollY -
                    100;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              About Us
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                if (servicesRef && servicesRef.current) {
                  const top =
                    servicesRef.current.getBoundingClientRect().top +
                    window.scrollY -
                    100;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              Services
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                if (contactUsRef && contactUsRef.current) {
                  const top =
                    contactUsRef.current.getBoundingClientRect().top +
                    window.scrollY -
                    100;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
            >
              Contact Us
            </div>
            <Link href="https://www.unit.network/">Unit Network</Link>
          </div>
          <SheetTrigger className="md:hidden">
            <IoMenu className="block size-8 md:hidden" />
          </SheetTrigger>
        </div>
      </nav>
      <SheetContent className="z-[60] w-full border-0 bg-white p-8 text-unit-black-100">
        <ul className="mt-12 flex flex-col items-start justify-start gap-y-6 font-poppins text-xl">
          <li>
            <SheetClose>
              <div
                onClick={() => {
                  if (aboutUsRef && aboutUsRef.current) {
                    const top =
                      aboutUsRef.current.getBoundingClientRect().top +
                      window.scrollY -
                      100;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                About Us
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div
                onClick={() => {
                  if (servicesRef && servicesRef.current) {
                    const top =
                      servicesRef.current.getBoundingClientRect().top +
                      window.scrollY -
                      100;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                Services
              </div>
            </SheetClose>
          </li>
          <li>
            <SheetClose>
              <div
                onClick={() => {
                  if (contactUsRef && contactUsRef.current) {
                    const top =
                      contactUsRef.current.getBoundingClientRect().top +
                      window.scrollY -
                      100;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                Contact Us
              </div>
            </SheetClose>
          </li>
          <li>
            <Link href="https://www.unit.network/">Unit Network</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default Navbar;
