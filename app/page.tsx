"use client";
import { ShinyText } from "@/components/AnimatedText";
import { TextArea } from "@/components/TextArea";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

export default function Home() {
  return (
    <main className="overflow-clip inset-0 -z-10 h-screen w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-blue-500">
              Showcase
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500">
              Services
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500">
              Process
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              className="hover:text-blue-500">
              About us
            </ScrollLink>
          </div>
        </div>

        <Link
          href={"/contact"}
          className="px-8 py-3 border-2 border-black hover:bg-[#abcbff] rounded-[6px] text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
          Book a Demo
        </Link>
      </Element>

      <section className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <ShinyText />
          <TextArea />
        </div>
      </section>
    </main>
  );
}
