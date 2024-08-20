"use client";
import { AnimatedBeamArea } from "@/components/AnimatedBeamArea";
import { ShinyText } from "@/components/AnimatedText";
import { BoxRevealDemo } from "@/components/BoxReveal";
import LetsMakeThis from "@/components/LetsMakeThis";
import { StarsArea } from "@/components/StarsArea";
import { TextArea } from "@/components/TextArea";
import BoxReveal from "@/components/ui/box-reveal";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import NumberTicker from "@/components/ui/number-ticker";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import WordPullUp from "@/components/ui/word-pull-up";
import { SquareArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsStarFill } from "react-icons/bs";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";

const services = [
  {
    icon: "/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/s_5.png",
    title: "Content Creation",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/s_3.png",
    title: "Social Media Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/s_4.png",
    title: "Email Marketing",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/s_2.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
];

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
            <Link href={"#"} className="hover:text-blue-500">
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
          href={"/"}
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

      <Element name="services">
        <section className="pb-10">
          <div className="container mx-auto">
            <div className="">
              <WordPullUp
                className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
                words="Work with Clodron"
              />

              <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
                All of our services are designed to increase your productivity
                and business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
              {services.map((service) => (
                <div
                  className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 rounded-lg p-6 hover:scale-105 transition-all"
                  key={service.title}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={222}
                    height={222}
                    className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  />
                  <h1 className="text-xl font-medium">{service.title}</h1>
                  <p className="text-gray-500">{service.description} </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      <section className="pb-24">
        <VelocityScroll
          text="Clodron Marketing Agency"
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] rotate-3"
        />
      </section>

      <Element name="process">
        <section className="">
          <div className="container">
            <h1 className="text-3xl md:text-5xl text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
              Our{" "}
              <span className="flex gap-x-1 items-center">
                <SquareArrowUpRight className="w-6 h-6 mb-8" />
                Creative
                <Star className="w-6 h-6 mb-8" />
              </span>
              Process
            </h1>
            <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
              All of our services are designed to increase your productivity and
              business.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <AnimatedBeamArea />
              </div>
              <div>
                <BoxRevealDemo />
              </div>
            </div>
          </div>
        </section>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logot.png"}
            width={500}
            height={500}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;We&apos;ve been working with Clodron for over 2 years and
              they&apos;ve been amazing to work with. They&apos;ve helped us
              grow our business and we couldn&apos;t be happier with the
              results. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <BsStarFill className="text-4xl text-yellow-500" />
              <BsStarFill className="text-4xl text-yellow-500" />
              <BsStarFill className="text-4xl text-yellow-500" />
              <BsStarFill className="text-4xl text-yellow-500" />
              <BsStarFill className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Clodron Global <br />
              CEO
            </span>
          </div>
        </main>
      </section>

      <Element name="about">
        <StarsArea />
      </Element>

      <section>
        <LetsMakeThis />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t items-center text-center justify-center flex flex-col">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <Image
              src={"/logo.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />
          </div>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © {new Date().getFullYear()} Clodron. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}
