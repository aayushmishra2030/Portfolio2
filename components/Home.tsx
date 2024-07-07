import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/button";
import { FaCircle, FaDownload } from "react-icons/fa6";
import { GrContactInfo } from "react-icons/gr";
import { HoverBorderGradient } from "./ui/border-hover";

export function Home() {
  return (
    <section className="relative flex items-center justify-center rounded-md bg-background/[0.96] py-16 md:py-48">
      <Spotlight className="z-10 top-40 left-0 md:left-60 md:-top-20" />
      <div className="flex flex-col items-center gap-4 sm:mt-[-70px]">
        <HoverBorderGradient className="flex items-center gap-2 text-sm">
          <FaCircle className="size-2 animate-pulse fill-green-600 text-green-600" />
          Available for work
        </HoverBorderGradient>
        <div className="text-3xl sm:text-5xl md:text-7xl font-bold">
          Mayank Ughade
        </div>
        <div className=" text-3xl sm:text-5xl md:text-7xl font-bold">
          Full-Stack developer
        </div>
        <p className="text-gray-400 text-center text-xs sm:text-sm">
          I am passionate about crafting innovative fullstack web applications,
          <br />
          merging creativity and functionality to deliver exceptional user
          experiences.
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-5 gap-2 items-center">
          <Button>
            <FaDownload className="mr-2" />
            Download My Resume
          </Button>
          <Button>
            <GrContactInfo className="mr-2 text-xl" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
