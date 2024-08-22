import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgDesignmodo, CgWebsite } from "react-icons/cg";
import { Scale3D } from "lucide-react";
import { GiTeamIdea } from "react-icons/gi";
import { BsSafe2 } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { BiMoney, BiSupport } from "react-icons/bi";

const features = [
  {
    icon: <CiDeliveryTruck className="h-8 w-8" />,
    title: "Fast Delivery",
    description:
      "1-2 weeks delivery for most projects. Call us for more information.",
  },
  {
    icon: <CgDesignmodo className="h-8 w-8" />,
    title: "Design & Development",
    description:
      "We design and develop your website with the latest technologies and trends.",
  },
  {
    icon: <Scale3D className="h-8 w-8" />,
    title: "Scalability + Maintenance ",
    description: "We offer maintenance and scalability for all websites.",
  },
  {
    icon: <GiTeamIdea className="h-8 w-8" />,
    title: "Team of Experts",
    description: "A team of experts ready to help you, at all times.",
  },
  {
    icon: <BsSafe2 className="h-8 w-8" />,
    title: "Secure Building",
    description:
      "Safe and secure building practices. To ensure your data is safe.",
  },
  {
    icon: <GrAnalytics className="h-8 w-8" />,
    title: "Analytics Tracking",
    description: "Track your progress with our built in analytics",
  },

  {
    icon: <CgWebsite className="h-8 w-8" />,
    title: "Dynamic Websites",
    description: "We build dynamic solutions that are easy to manage.",
  },
  {
    icon: <BiSupport className="h-8 w-8" />,
    title: "24/7 Support",
    description:
      "We offer 24/7 support for all our clients. Call us for more information.",
  },
  {
    icon: <BiMoney className="h-8 w-8" />,
    title: "Affordable Pricing",
    description: "Affordable pricing for all our clients.",
  },
];

export function StarsArea() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
         Our Services is the best solution for your business.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer">
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              {feature.icon}
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
