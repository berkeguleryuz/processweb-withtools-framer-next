"use client";
import { ShinyText } from "@/components/AnimatedText";
import { TextArea } from "@/components/TextArea";
import BoxReveal from "@/components/ui/box-reveal";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import NumberTicker from "@/components/ui/number-ticker";
import WordPullUp from "@/components/ui/word-pull-up";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";

export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen inset-0 bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] space-y-16">
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

      <section className="md:pb-10 items-center justify-center flex flex-col">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <ShinyText />
        </div>
        <TextArea />
        <p className="text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-600 px-2">
          Schedule a call with us and experience the power of Clodron.
        </p>
        <div className="flex md:justify-center items-center gap-x-4">
          <Link
            href={"/meeting"}
            className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
            Book a Demo
          </Link>
          <Link
            href={"/meeting"}
            className="bg-white  border-black py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
            Showcase
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-black/80" />
              Design
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-black/80" />
              Development
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-black/80" />
              Marketing
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-black/80" />
              Strategy
            </p>
          </BoxReveal>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between md:gap-y-4 max-w-6xl w-full h-full md:my-10 py-10  mx-auto">
        <div className="md:w-2/5">
          <h2 className="text-2xl items-center justify-center flex font-medium text-gray-600 md:px-0 px-4">
            Trusted by businesses of all sizes
          </h2>
          <div className="flex h-full items-center  justify-center my-6 gap-x-5 w-full">
            <div className="flex flex-col">
              <h3 className="text-black text-3xl md:text-5xl">
                <NumberTicker value={1000} /> +
              </h3>
              <p className="text-gray-500 text-sm md:text-md">Happy Clients</p>
            </div>

            <div className="w-px bg-gray-300 self-stretch" />

            <div className="">
              <h3 className="text-black text-3xl md:text-5xl whitespace-noswrap overflow-hidden">
                <NumberTicker value={100} /> +
              </h3>
              <p className="text-gray-500 text-sm md:text-md">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 w-4/5 overflow-hidden md:mt-10 ">
          <InfiniteMovingLogos
            pauseOnHover
            speed="slow"
            direction="left"
            items={[
              {
                logo: "/logo.png",
                name: "Clodron",
              },
              {
                logo: "/logo.png",
                name: "Clodron",
              },
            ]}
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto">
          <div className="">
            <WordPullUp
              className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
              words="Work with Clodron"
            />
          </div>
          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to increase your productivity and
            business.
          </p>
        </div>
      </section>
    </main>
  );
}
