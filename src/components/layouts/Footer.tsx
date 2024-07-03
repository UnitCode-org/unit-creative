import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="grid w-full max-w-screen-2xl grid-cols-2 justify-between px-8 py-8 text-unit-black-100 sm:px-16 sm:py-32">
      <div className="flex flex-col gap-y-6 sm:gap-y-7">
        <h2 className="text-lg sm:text-xl">Unit Creative</h2>
        <div className="grid grid-cols-3 items-center gap-2 sm:flex w-fit">
          <Link
            href="https://www.instagram.com/unit.network"
            className="size-10 sm:size-8 rounded-full bg-unit-black-100 p-1 text-white flex items-center justify-center"
          >
            <FaInstagram className="size-6"/>
          </Link>
          <Link href="https://t.me/unitfoundation">
            <FaTelegram className="size-10 sm:size-8" />
          </Link>
          <Link href="https://www.facebook.com/theunitnetwork">
            <FaFacebook className="size-10 sm:size-8" />
          </Link>
          <Link
            href="https://twitter.com/theunitnetwork"
            className="size-10 sm:size-8 rounded-full bg-unit-black-100 p-1 text-white flex items-center justify-center"
          >
            <FaXTwitter className="size-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/theunitnetwork/"
            className="size-10 sm:size-8 rounded-full bg-unit-black-100 p-1 text-white flex items-center justify-center"
          >
            <FaLinkedinIn className="size-6" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-end gap-x-20 gap-y-6 text-right font-poppins sm:flex-row">
        <ul className="flex flex-col gap-y-1">
          <li>Home</li>
          <li>About</li>
          <li>Media Links</li>
          <li>Technology</li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <li>Unit Network</li>
          <li>Unit Events</li>
          <li>Unit Cities</li>
          <li>Unit Conference</li>
          <li>Unit Masters</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
